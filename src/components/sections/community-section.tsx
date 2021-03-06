import React, { ReactElement, FC } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

import { SectionTitle, SectionTitleSub, SlicedListSection } from '../partials/section';

import { TalkProps } from '../../types';

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

const CommunitySection: FC<CommunitySectionProps> = ({ talks }): ReactElement => {
  if (talks.length === 0) {
    return null;
  }

  return (
    <CommunitySectionWrapper listType="View Contributions" complete={talks.length > 3}>
      <SectionTitle>Community</SectionTitle>

      <SectionTitleSub>Talks, Open Source, Conferences</SectionTitleSub>

      {talks.map((post) => (
        <motion.article
          key={post.sys.id}
          className="rounded-md bg-custom-lightGhost"
          whileHover={{ scale: 1.025 }}
          whileTap={{ scale: 0.975 }}>
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
        </motion.article>
      ))}
    </CommunitySectionWrapper>
  );
};

CommunitySection.propTypes = {
  talks: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default CommunitySection;
