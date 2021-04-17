import React, { ReactElement, FC } from 'react';
import PropTypes from 'prop-types';

import { Section, SectionTitle, SectionTitleSub } from '../partials/section';

import { BlogPostProps } from '../../types';

type BlogPostsSectionProps = {
  blogPosts: BlogPostProps[];
};

const BlogPostsSection: FC<BlogPostsSectionProps> = ({ blogPosts }): ReactElement => {
  return (
    <Section>
      <SectionTitle>Blog posts</SectionTitle>
      <SectionTitleSub>Published articles</SectionTitleSub>
      {blogPosts.map((post) => (
        <article key={post.sys.id}>
          <a
            href={post.fields.mediumLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-2.5 mb-6 text-gray-700 border border-gray-500 border-solid rounded-md sm:p-6 hover:text-indigo-600 hover:border-indigo-600">
            <h4 className="text-sm md:text-base">{post.fields.title}</h4>
          </a>
        </article>
      ))}
    </Section>
  );
};

BlogPostsSection.propTypes = {
  blogPosts: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default BlogPostsSection;
