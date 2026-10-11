import React, { ReactElement, FC, useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { motion, useReducedMotion } from 'framer-motion';

import { SectionTitle, SectionTitleSub, SlicedListSection } from '../partials/section';

import { TalkProps } from '../../types';
import { useInView } from '../../animation/use-in-view';

type CommunitySectionProps = {
  talks: TalkProps[];
};

const CommunitySectionWrapper = styled(SlicedListSection)`
  background-repeat: no-repeat;
  background-position: right center;
  background-image: url(/pattern-three-sm.png);
  background-size: 25%;

  @media (min-width: 768px) {
    background-size: 10%;
  }
`;

type CommunityRowProps = {
  post: TalkProps;
  index: number;
};

const CommunityRowBody: FC<{ post: TalkProps }> = ({ post }) => (
  <div className="flex items-center justify-between w-full p-2.5 mb-6 text-gray-700 border border-gray-400 border-solid rounded-md sm:p-6 hover:text-custom-purple hover:border-custom-purple">
    <h4 className="text-sm md:text-base">{post.fields.title}</h4>
    <a
      href={post.fields.slidesLink}
      target="_blank"
      rel="noopener noreferrer"
      className="text-xs underline opacity-80 hover:opacity-100">
      <h6>Slides</h6>
    </a>
  </div>
);

const CommunityRow: FC<CommunityRowProps> = ({ post, index }) => {
  const shouldReduceMotion = useReducedMotion();
  const [ref, inView] = useInView<HTMLDivElement>({ rootMargin: '-10% 0px', once: true });
  const [slideDone, setSlideDone] = useState(false);
  const fromLeft = index % 2 === 0;
  const offset = fromLeft ? '-100%' : '100%';

  if (shouldReduceMotion) {
    return (
      <article className="rounded-md bg-custom-lightGhost">
        <CommunityRowBody post={post} />
      </article>
    );
  }

  return (
    <div ref={ref} style={{ overflow: slideDone ? 'visible' : 'hidden' }}>
      <motion.article
        initial={{ x: offset }}
        animate={{ x: inView ? 0 : offset }}
        transition={{
          duration: 1.05,
          ease: [0.16, 1, 0.3, 1],
          delay: inView ? 0.08 + index * 0.07 : 0,
        }}
        onAnimationComplete={(def) => {
          if (def && typeof def === 'object' && (def as { x?: number }).x === 0) {
            setSlideDone(true);
          }
        }}
        className="rounded-md bg-custom-lightGhost"
        whileHover={{ scale: 1.025 }}
        whileTap={{ scale: 0.975 }}>
        <CommunityRowBody post={post} />
      </motion.article>
    </div>
  );
};

const CommunitySection: FC<CommunitySectionProps> = ({ talks }): ReactElement => {
  if (talks.length === 0) {
    return null;
  }

  return (
    <CommunitySectionWrapper listType="View Contributions" complete={talks.length > 3}>
      <SectionTitle>Community</SectionTitle>

      <SectionTitleSub>Talks, Open Source, Conferences</SectionTitleSub>

      {talks.map((post, i) => (
        <CommunityRow key={post.sys.id} post={post} index={i} />
      ))}
    </CommunitySectionWrapper>
  );
};

CommunitySection.propTypes = {
  talks: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default CommunitySection;
