import React, { ReactElement, FC } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { Section, SectionTitle, SectionTitleSub } from '../partials/section';

import { BlogPostProps } from '../../types';

type BlogPostsSectionProps = {
  blogPosts: BlogPostProps[];
};

const BlogSectionWrapper = styled(Section)`
  background-repeat: no-repeat;
  background-position: right 96%;
  background-image: url(/pattern-one.png);
  background-size: 45%;

  @media (min-width: 768px) {
    background-position: right center;
    background-size: 17%;
  }
`;

const BlogPostsSection: FC<BlogPostsSectionProps> = ({ blogPosts }): ReactElement => {
  return (
    <BlogSectionWrapper>
      <SectionTitle>Blog posts</SectionTitle>
      <SectionTitleSub>Published articles</SectionTitleSub>
      {blogPosts.map((post) => (
        <article key={post.sys.id} className="rounded-md bg-custom-lightGhost">
          <a
            href={post.fields.mediumLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-2.5 mb-6 text-gray-700 border border-gray-400 border-solid rounded-md sm:p-6 hover:text-custom-purple hover:border-custom-purple">
            <h4 className="text-sm md:text-base">{post.fields.title}</h4>
          </a>
        </article>
      ))}
    </BlogSectionWrapper>
  );
};

BlogPostsSection.propTypes = {
  blogPosts: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default BlogPostsSection;
