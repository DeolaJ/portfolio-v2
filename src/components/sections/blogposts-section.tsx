import React, { ReactElement, FC } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { motion, useReducedMotion } from 'framer-motion';

import { Section, SectionTitle, SectionTitleSub } from '../partials/section';

import { BlogPostProps } from '../../types';
import { useInView } from '../../animation/use-in-view';

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

type BlogPostRowProps = {
  post: BlogPostProps;
  index: number;
};

const BlogPostRow: FC<BlogPostRowProps> = ({ post, index }) => {
  const shouldReduceMotion = useReducedMotion();
  const [ref, inView] = useInView<HTMLElement>({ rootMargin: '-10% 0px' });

  if (shouldReduceMotion) {
    return (
      <article className="rounded-md bg-custom-lightGhost">
        <a
          href={post.fields.mediumLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block p-2.5 mb-6 text-gray-700 border border-gray-400 border-solid rounded-md sm:p-6 hover:text-custom-purple hover:border-custom-purple">
          <h4 className="text-sm md:text-base">{post.fields.title}</h4>
        </a>
      </article>
    );
  }

  return (
    <motion.article
      ref={ref}
      initial={{ y: 40, opacity: 0, scale: 0.96 }}
      animate={
        inView
          ? { y: 0, opacity: 1, scale: 1 }
          : { y: 40, opacity: 0, scale: 0.96 }
      }
      transition={{
        type: 'spring',
        stiffness: 220,
        damping: 26,
        mass: 0.9,
        delay: inView ? index * 0.05 : 0,
      }}
      className="rounded-md bg-custom-lightGhost"
      whileHover={{ scale: 1.025 }}
      whileTap={{ scale: 0.975 }}>
      <a
        href={post.fields.mediumLink}
        target="_blank"
        rel="noopener noreferrer"
        className="block p-2.5 mb-6 text-gray-700 border border-gray-400 border-solid rounded-md sm:p-6 hover:text-custom-purple hover:border-custom-purple">
        <h4 className="text-sm md:text-base">{post.fields.title}</h4>
      </a>
    </motion.article>
  );
};

const BlogPostsSection: FC<BlogPostsSectionProps> = ({ blogPosts }): ReactElement => {
  return (
    <BlogSectionWrapper>
      <SectionTitle>Blog posts</SectionTitle>
      <SectionTitleSub>Published articles</SectionTitleSub>
      {blogPosts.map((post, i) => (
        <BlogPostRow key={post.sys.id} post={post} index={i} />
      ))}
    </BlogSectionWrapper>
  );
};

BlogPostsSection.propTypes = {
  blogPosts: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default BlogPostsSection;
