const easing = [0.6, -0.05, 0.01, 0.99];

export const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

export const fadeInSide = {
  initial: {
    x: 140,
    opacity: 0,
    transition: { duration: 0.8, ease: easing },
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: easing,
    },
  },
};

export const zoomIn = {
  initial: {
    scale: 0,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

export const staggerMd = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const staggerSm = {
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};
