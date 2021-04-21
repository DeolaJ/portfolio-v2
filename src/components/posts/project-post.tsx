import React, { FC } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import hydrate from 'next-mdx-remote/hydrate';

import { Section } from '../partials/section';
import PostNavigation from './post-navigation';
import { Header, Paragraph, Code } from '../post-partials';
import { ProjectPostProps } from '../../types';

const components = {
  h1: Header,
  p: Paragraph,
  code: Code,
};

const ProjectPostHeader = styled(Section)`
  background-repeat: no-repeat;
  background-position: left bottom, right top;
  background-image: url(/pattern-three-sm.png), url(/pattern-one-sm.png);
  background-size: 8%, 8%;
`;

const ProjectPostPage: FC<ProjectPostProps> = ({ postContent, navigationPosts, projectPost }) => {
  let content = null;
  if (postContent) {
    content = hydrate(postContent, { components });
  }

  return (
    <>
      <ProjectPostHeader className="py-32 text-center text-custom-purple">
        <h1 className="mb-5 text-3xl">{projectPost.fields.title}</h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-700">{projectPost.fields.subtitle}</p>
      </ProjectPostHeader>
      <Section className="max-w-4xl mx-auto">
        {content}
        <PostNavigation navigationPosts={navigationPosts} pageType="projects" />
      </Section>
    </>
  );
};

ProjectPostPage.propTypes = {
  postContent: PropTypes.any.isRequired,
  navigationPosts: PropTypes.any.isRequired,
  projectPost: PropTypes.any.isRequired,
};

export default ProjectPostPage;
