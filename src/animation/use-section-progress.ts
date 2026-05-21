import { useEffect, useRef } from 'react';
import { MotionValue, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';

type Options = {
  spring?: boolean;
  stiffness?: number;
  damping?: number;
  mass?: number;
};

export function useSectionProgress<T extends HTMLElement = HTMLElement>(
  opts: Options = {}
): readonly [React.MutableRefObject<T | null>, MotionValue<number>, boolean | null] {
  const { spring = true, stiffness = 90, damping = 22, mass = 0.6 } = opts;
  const ref = useRef<T | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const raw = useMotionValue(0);
  const smoothed = useSpring(raw, { stiffness, damping, mass });
  const progress = spring ? smoothed : raw;

  useEffect(() => {
    if (shouldReduceMotion) return undefined;
    let rafId = 0;
    const update = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 0;
      const value = (vh - rect.top) / (vh + rect.height);
      raw.set(Math.max(0, Math.min(1, value)));
    };
    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(rafId);
    };
  }, [raw, shouldReduceMotion]);

  return [ref, progress, shouldReduceMotion] as const;
}
