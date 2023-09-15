import React, { FC } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import hydrate from 'next-mdx-remote/hydrate';
import Link from 'next/link';

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
  background-blend-mode: multiply;
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
          backgroundColor: notePost.fields?.backdropColor || 'rgba(72, 14, 134, 0.65)',
        }}
      />

      <Section className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Link href="/notes">
            <a>
              <p className="text-gray-700 text-xs sm:text-sm italic hover:underline">Notes</p>
            </a>
          </Link>
          <p className="text-gray-400">{`>`}</p>
          <Link href={`/notes/${notePost.fields.slug}`}>
            <a>
              <p className="text-gray-700 text-xs sm:text-sm italic font-bold hover:underline">
                {notePost.fields?.title || ''}
              </p>
            </a>
          </Link>
        </div>

        <SectionTitle className="font-bold text-3xl sm:text-4xl text-gray-800 capitalize">
          {notePost.fields.title}
        </SectionTitle>
        <SectionTitleSub className="mb-3 text-base sm:text-base md:text-base lg:text-base text-gray-700 font-medium">
          {notePost.fields.subtitle}
        </SectionTitleSub>

        <div className="flex items-center gap-3">
          <p className="text-gray-700 text-xs italic">
            <strong className="font-bolder">Published:</strong> {formatDate(notePost.sys.created)}
          </p>
          <p className="text-gray-500">•</p>
          <p className="text-gray-700 text-xs italic">
            <strong className="font-bolder">Updated:</strong> {formatDate(notePost.sys.updated)}
          </p>
        </div>

        <hr className="mt-5 mb-12" />

        <NotePostWrapper>{content ? content : null}</NotePostWrapper>

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
