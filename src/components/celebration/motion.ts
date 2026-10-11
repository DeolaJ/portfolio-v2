import { Variants } from 'framer-motion';

/**
 * Variants take `custom={shouldReduceMotion}` so reduced-motion guests get the final state at
 * once. Initial values stay identical either way, so server and client markup always match.
 */
const settle = (reduce: boolean, transition: Record<string, unknown>) =>
  reduce ? { duration: 0 } : transition;

export const bloom: Variants = {
  initial: { scale: 0, rotate: -35, opacity: 0 },
  animate: (reduce: boolean) => ({
    scale: 1,
    rotate: 0,
    opacity: 1,
    transition: settle(reduce, { type: 'spring', stiffness: 110, damping: 13 }),
  }),
};

export const drawOn: Variants = {
  initial: { pathLength: 0, opacity: 0 },
  animate: (reduce: boolean) => ({
    pathLength: 1,
    opacity: 1,
    transition: settle(reduce, { duration: 1.2, ease: [0.65, 0, 0.35, 1] }),
  }),
};

export const riseIn: Variants = {
  initial: { y: 18, opacity: 0 },
  animate: (reduce: boolean) => ({
    y: 0,
    opacity: 1,
    transition: settle(reduce, { duration: 0.8, ease: [0.16, 1, 0.3, 1] }),
  }),
};

export const cardIn: Variants = {
  initial: { scale: 0.96, opacity: 0 },
  animate: (reduce: boolean) => ({
    scale: 1,
    opacity: 1,
    transition: settle(reduce, { duration: 0.7, ease: [0.16, 1, 0.3, 1] }),
  }),
};

export const staggerFrom = (delay: number, gap = 0.07): Variants => ({
  animate: (reduce: boolean) => ({
    transition: reduce ? {} : { staggerChildren: gap, delayChildren: delay },
  }),
});
