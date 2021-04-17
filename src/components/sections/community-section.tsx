import React, { ReactElement, FC } from 'react';
import PropTypes from 'prop-types';

import { SectionTitle, SectionTitleSub, SlicedListSection } from '../partials/section';

import { TalkProps } from '../../types';

type CommunitySectionProps = {
  talks: TalkProps[];
};

const CommunitySection: FC<CommunitySectionProps> = ({ talks }): ReactElement => {
  if (talks.length === 0) {
    return null;
  }

  return (
    <SlicedListSection listType="View Contributions" complete={talks.length > 3}>
      <SectionTitle>Community</SectionTitle>

      <SectionTitleSub>Talks and Conferences</SectionTitleSub>

      {talks.map((post) => (
        <article key={post.sys.id}>
          <div className="flex items-center justify-between w-full p-2.5 mb-6 text-gray-700 border border-gray-500 border-solid rounded-md sm:p-6 hover:text-indigo-600 hover:border-indigo-600">
            <h4 className="text-sm md:text-base">{post.fields.title}</h4>
            <a
              href={post.fields.slidesLink}
              target="_blank"
              rel="noopener noreferrer"
              className="underline">
              <h6>Slides</h6>
            </a>
          </div>
        </article>
      ))}
    </SlicedListSection>
  );
};

CommunitySection.propTypes = {
  talks: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default CommunitySection;
