import React, { FC } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const splitWord = {
  initial: { y: '110%' },
  animate: (reduce: boolean) => ({
    y: 0,
    transition: reduce ? { duration: 0 } : { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  }),
};

type SplitWordsProps = {
  text: string;
  className?: string;
  delay?: number;
};

/**
 * Each word rises out of its own clipped line, so the heading reads as one motion. Reduced
 * motion keeps the same markup (so hydration matches) and simply settles at once.
 */
const SplitWords: FC<SplitWordsProps> = ({ text, className, delay = 0.25 }) => {
  const shouldReduceMotion = useReducedMotion();
  const words = text.split(' ');

  return (
    <motion.h1
      variants={{
        initial: {},
        animate: (reduce: boolean) => ({
          transition: reduce ? {} : { staggerChildren: 0.06, delayChildren: delay },
        }),
      }}
      custom={shouldReduceMotion}
      aria-label={text}
      className={className}>
      {words.map((word, i) => (
        <span
          // eslint-disable-next-line react/no-array-index-key
          key={`${word}-${i}`}
          aria-hidden="true"
          style={{
            display: 'inline-block',
            overflow: 'hidden',
            verticalAlign: 'bottom',
            paddingBottom: '0.12em',
            marginBottom: '-0.12em',
          }}>
          <motion.span
            variants={splitWord}
            custom={shouldReduceMotion}
            style={{ display: 'inline-block', willChange: 'transform' }}>
            {word}
            {i < words.length - 1 ? ' ' : ''}
          </motion.span>
        </span>
      ))}
    </motion.h1>
  );
};

SplitWords.defaultProps = {
  className: '',
  delay: 0.25,
};

export default SplitWords;
