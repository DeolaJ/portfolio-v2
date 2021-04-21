import React, { FC } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import hydrate from 'next-mdx-remote/hydrate';

import { Section } from '../partials/section';
import PostNavigation from './post-navigation';
import { Header, Paragraph, Code } from '../post-partials';
import { NotePostProps } from '../../types';

const components = {
  h1: Header,
  p: Paragraph,
  code: Code,
};

const NotePostHeader = styled(Section)`
  background-repeat: no-repeat;
  background-position: left bottom, right top;
  background-image: url(/pattern-one-sm.png), url(/pattern-two-sm.png);
  background-size: 8%, 8%;
`;

const NotePost: FC<NotePostProps> = ({ postContent, navigationPosts, notePost }) => {
  const content = hydrate(postContent, { components });
  return (
    <>
      <NotePostHeader className="py-32 text-center text-custom-purple">
        <h1 className="mb-5 text-3xl">{notePost.fields.title}</h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-700">{notePost.fields.subtitle}</p>
      </NotePostHeader>
      <Section className="max-w-4xl mx-auto">
        {content}
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
