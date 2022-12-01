import React, { FC } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import hydrate from 'next-mdx-remote/hydrate';

import { formatDate } from '../../utils';

import { Section, SectionTitle, SectionTitleSub } from '../partials/section';
import PostNavigation from './post-navigation';
import {
  Header,
  Paragraph,
  Code,
  HeaderThree,
  HeaderTwo,
  ListItem,
  List,
  NumberedList,
} from '../post-partials';
import { NotePostProps } from '../../types';

const components = {
  h1: Header,
  h2: HeaderTwo,
  h3: HeaderThree,
  p: Paragraph,
  li: ListItem,
  ul: List,
  ol: NumberedList,
  code: Code,
};

const NotePostHeader = styled(Section)`
  background-repeat: no-repeat;
  background-position: left bottom, right top, center;
  background-size: 8%, 8%, cover;
  background-color: rgba(72, 14, 134, 0.65);
  background-blend-mode: overlay;
`;

const NotePostWrapper = styled.div`
  a {
    color: rgba(67, 56, 202);

    &:hover {
      text-decoration: underline;
    }
  }

  img {
    margin-top: 3rem;
    margin-bottom: 3rem;
  }

  hr {
    margin-bottom: 1rem;
  }
`;

const NotePost: FC<NotePostProps> = ({ postContent, navigationPosts, notePost }) => {
  const content = hydrate(postContent, { components });

  return (
    <>
      <NotePostHeader
        className="py-28 text-center text-custom-purple"
        style={{
          backgroundImage: `url(/pattern-one-sm.png), url(/pattern-two-sm.png), url(${notePost.fields.imageLink})`,
        }}
      />

      <Section className="max-w-4xl mx-auto">
        <SectionTitle className="font-bold text-2xl sm:text-4xl mb:2">
          {notePost.fields.title}
        </SectionTitle>
        <SectionTitleSub className="mb-12 text-base sm:text-base md:text-base lg:text-base text-gray-500 font-semibold">
          {notePost.fields.subtitle}
        </SectionTitleSub>

        <NotePostWrapper>{content ? content : null}</NotePostWrapper>

        <>
          <p className="mt-16 mb-2 text-xs italic font-bold">
            Published: {formatDate(notePost.sys.created)}
          </p>
          <p className="-mb-4 text-xs italic font-bold">
            Last Updated: {formatDate(notePost.sys.updated)}
          </p>
        </>
        <PostNavigation navigationPosts={navigationPosts} pageType="notes" />
      </Section>
    </>
  );
};

NotePost.propTypes = {
  postContent: PropTypes.any.isRequired,
  navigationPosts: PropTypes.any.isRequired,
  notePost: PropTypes.any.isRequired,
};

export default NotePost;
