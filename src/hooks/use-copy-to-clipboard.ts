import { useCallback, useEffect, useRef, useState } from 'react';

// In-app browsers (WhatsApp, Instagram) often block the Clipboard API but still allow this.
const copyWithSelection = (text: string): boolean => {
  const field = document.createElement('textarea');
  field.value = text;
  field.setAttribute('readonly', '');
  field.style.position = 'fixed';
  field.style.opacity = '0';
  document.body.appendChild(field);
  field.select();
  field.setSelectionRange(0, text.length);
  const copied = document.execCommand('copy');
  document.body.removeChild(field);
  return copied;
};

export function useCopyToClipboard(
  resetAfterMs = 2000
): [boolean, (text: string) => Promise<void>] {
  const [copied, setCopied] = useState(false);
  const timer = useRef<number>();

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const copy = useCallback(
    async (text: string) => {
      let success = false;
      try {
        await navigator.clipboard.writeText(text);
        success = true;
      } catch (error) {
        success = copyWithSelection(text);
      }
      setCopied(success);
      if (success) {
        window.clearTimeout(timer.current);
        timer.current = window.setTimeout(() => setCopied(false), resetAfterMs);
      }
    },
    [resetAfterMs]
  );

  return [copied, copy];
}
