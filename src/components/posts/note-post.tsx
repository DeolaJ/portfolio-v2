import React, { FC } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import hydrate from 'next-mdx-remote/hydrate';

import { formatDate } from '../../utils';

import { Section } from '../partials/section';
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
  background-color: rgba(100, 20, 187, 0.55);
  background-blend-mode: overlay;
`;

const NotePost: FC<NotePostProps> = ({ postContent, navigationPosts, notePost }) => {
  const content = hydrate(postContent, { components });

  return (
    <>
      <NotePostHeader
        className="py-32 text-center text-custom-purple"
        style={{
          backgroundImage: `url(/pattern-one-sm.png), url(/pattern-two-sm.png), url(${notePost.fields.imageLink})`,
        }}>
        <h1 className="mb-5 text-3xl text-white">{notePost.fields.title}</h1>
        <p className="max-w-3xl mx-auto text-lg text-white opacity-90">
          {notePost.fields.subtitle}
        </p>
      </NotePostHeader>
      <Section className="max-w-4xl mx-auto">
        {content ? content : null}
        <>
          <p className="mt-10 mb-2 text-xs italic font-bold">
            Published: {formatDate(notePost.sys.created)}
          </p>
          <p className="-mb-10 text-xs italic font-bold">
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
