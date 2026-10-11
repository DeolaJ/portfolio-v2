import { useCallback, useEffect, useRef, useState } from 'react';

export function useCopyToClipboard(
  resetAfterMs = 2000
): [boolean, (text: string) => Promise<void>] {
  const [copied, setCopied] = useState(false);
  const timer = useRef<number>();

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const copy = useCallback(
    async (text: string) => {
      try {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        window.clearTimeout(timer.current);
        timer.current = window.setTimeout(() => setCopied(false), resetAfterMs);
      } catch (error) {
        setCopied(false);
      }
    },
    [resetAfterMs]
  );

  return [copied, copy];
}
