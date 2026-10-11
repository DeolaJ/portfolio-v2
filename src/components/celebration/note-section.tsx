import React, { FC } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

import { FloralSprig } from './florals';
import { riseIn, staggerFrom } from './motion';
import { SectionTitle } from '../partials/section';

const NoteSection: FC = () => {
  const reduce = useReducedMotion();

  return (
    <section className="px-4 pb-8 sm:px-8">
      <motion.div
        variants={staggerFrom(0.8, 0.08)}
        custom={reduce}
        className="max-w-xl px-6 pt-12 pb-10 mx-auto text-center border-t border-custom-edge">
        <SectionTitle>A note from us</SectionTitle>
        <motion.p variants={riseIn} custom={reduce} className="text-lg leading-relaxed md:text-xl">
          Our little girl has filled our home with so much joy. We can&rsquo;t wait to name her
          surrounded by the people who have loved us, prayed for us and cheered us on.
        </motion.p>
        <motion.p
          variants={riseIn}
          custom={reduce}
          className="mt-10 text-2xl italic font-display text-custom-rose">
          With love,
        </motion.p>
        <motion.p
          variants={riseIn}
          custom={reduce}
          className="text-4xl font-semibold font-display text-custom-navy">
          Adeola &amp; Precious
        </motion.p>
        <FloralSprig delay={1.2} className="w-32 mx-auto mt-6" />
      </motion.div>
    </section>
  );
};

export default NoteSection;
