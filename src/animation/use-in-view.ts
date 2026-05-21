import { useEffect, useRef, useState } from 'react';

type Options = {
  rootMargin?: string;
  threshold?: number | number[];
  once?: boolean;
};

export function useInView<T extends Element = HTMLElement>(opts: Options = {}) {
  const { rootMargin = '-15% 0px', threshold = 0, once = false } = opts;
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return undefined;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { rootMargin, threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin, threshold, once]);

  return [ref, inView] as const;
}
