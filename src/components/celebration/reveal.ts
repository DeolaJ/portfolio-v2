export const REVEAL_ATTRIBUTE = 'data-reveal-envelope';
export const REVEAL_SEEN_KEY = 'naming-ceremony-revealed';

// Mirrors this check before first paint so returning guests never see the envelope flash.
export const REVEAL_BOOT_SCRIPT = `try{if(!localStorage.getItem('${REVEAL_SEEN_KEY}')&&!matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.setAttribute('${REVEAL_ATTRIBUTE}','')}}catch(e){}`;

export function shouldPlayReveal(): boolean {
  try {
    const seen = window.localStorage.getItem(REVEAL_SEEN_KEY);
    return !seen && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  } catch (error) {
    return false;
  }
}

export function markRevealSeen(): void {
  try {
    window.localStorage.setItem(REVEAL_SEEN_KEY, '1');
  } catch (error) {
    // Private browsing can block storage; the envelope just plays again next time.
  }
}
