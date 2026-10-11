import React, { FC } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

import SplitWords from '../partials/split-words';
import { FloralCorner, FloralDivider, FloralSprig } from './florals';
import { cardIn, riseIn, staggerFrom } from './motion';
import { NAMING_CEREMONY } from '../../constants/naming-ceremony';

const dateRuleClass =
  'flex-1 py-2 text-xs font-bold tracking-widest uppercase border-t border-b border-custom-edge text-custom-navy';

const InvitationCard: FC = () => {
  const reduce = useReducedMotion();
  const { hosts, date, hostTimeZone, startsAt } = NAMING_CEREMONY;

  return (
    <section className="px-4 pt-12 pb-4 sm:px-8 md:pt-20">
      <motion.article
        variants={cardIn}
        custom={reduce}
        className="relative max-w-2xl mx-auto border rounded-sm bg-custom-paper border-custom-edge">
        <div className="absolute border rounded-sm pointer-events-none inset-3 border-custom-edge" />
        <FloralCorner
          delay={0.2}
          className="absolute w-44 -top-10 -left-8 md:w-64 md:-top-14 md:-left-14"
        />
        <div className="absolute transform rotate-180 w-44 -bottom-10 -right-8 md:w-64 md:-bottom-14 md:-right-14">
          <FloralCorner delay={0.45} className="w-full" />
        </div>
        <FloralSprig delay={0.6} className="absolute w-24 top-5 -right-3 md:w-36 md:top-8" />
        <div className="absolute w-24 transform rotate-180 bottom-5 -left-3 md:w-36 md:bottom-8">
          <FloralSprig delay={0.7} className="w-full" />
        </div>

        <motion.div
          variants={staggerFrom(0.25, 0.09)}
          custom={reduce}
          className="relative flex flex-col items-center px-6 text-center py-36 md:px-16 md:py-48">
          <motion.p
            variants={riseIn}
            custom={reduce}
            className="text-xl italic font-display md:text-2xl text-custom-navy">
            You are joyfully invited to the
          </motion.p>
          <SplitWords
            text="Naming Ceremony"
            delay={0.45}
            className="max-w-xs mt-4 text-6xl font-semibold leading-none font-display md:max-w-md md:text-8xl text-custom-navy"
          />
          <motion.p
            variants={riseIn}
            custom={reduce}
            className="mt-4 text-3xl italic font-display md:text-4xl text-custom-rose">
            of our baby girl
          </motion.p>

          <FloralDivider delay={0.9} className="w-48 mt-10 md:w-56" />

          <motion.p
            variants={riseIn}
            custom={reduce}
            className="mt-10 text-xs font-semibold tracking-widest text-gray-600 uppercase">
            Hosted with love by
          </motion.p>
          <motion.p
            variants={riseIn}
            custom={reduce}
            className="mt-3 text-4xl font-semibold leading-tight font-display md:text-5xl text-custom-navy">
            {hosts[0]} <span className="italic font-medium text-custom-rose">&amp;</span> {hosts[1]}
          </motion.p>

          <motion.time
            variants={riseIn}
            custom={reduce}
            dateTime={startsAt}
            className="flex items-center justify-center w-full max-w-sm mt-12">
            <span className={dateRuleClass}>{date.weekday}</span>
            <span className="flex flex-col items-center px-5">
              <span className="text-xs font-bold tracking-widest uppercase text-custom-navy">
                {date.month}
              </span>
              <span className="my-1 text-6xl font-semibold leading-none font-display text-custom-rose">
                {date.day}
              </span>
              <span className="text-xs font-bold tracking-widest uppercase text-custom-navy">
                {date.year}
              </span>
            </span>
            <span className={dateRuleClass}>{date.time}</span>
          </motion.time>
          <motion.p
            variants={riseIn}
            custom={reduce}
            className="mt-4 text-lg italic font-display text-custom-navy">
            {hostTimeZone} time
          </motion.p>

          <motion.p
            variants={riseIn}
            custom={reduce}
            className="mt-10 text-xs font-bold tracking-widest uppercase text-custom-navy">
            Celebrating online, on Zoom
          </motion.p>
          <motion.a
            variants={riseIn}
            custom={reduce}
            href="#join"
            className="mt-2 text-xs font-bold tracking-widest underline uppercase text-custom-rose">
            The link is below
          </motion.a>
        </motion.div>
      </motion.article>
    </section>
  );
};

export default InvitationCard;
