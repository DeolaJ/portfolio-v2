/* eslint-disable no-underscore-dangle */
import React, { ReactElement } from 'react';
import Head from 'next/head';
import { GetStaticProps, GetStaticPaths } from 'next';
import PropTypes from 'prop-types';
import { createClient } from 'contentful';

import Layout from '../../src/components/layout';
// import ProjectPostPage from '../../src/components/posts/project';

import { ProjectProps, ProjectPropsFields } from '../../src/types';
// import { getNextAndPrevious, generateProjectPosts } from '../../src/utils';
import { generateProjectPosts } from '../../src/utils';

type ProjectPostProps = {
  projectPost: ProjectProps;
};

function ProjectPost({ projectPost }: ProjectPostProps): ReactElement {
  return (
    <>
      <Head>
        <title>
          {projectPost.fields.title}
          {' | Project'}
        </title>
        <meta name="twitter:title" content={projectPost.fields.title} />
        <meta property="og:title" content={projectPost.fields.title} />
        <meta name="twitter:site" content={projectPost.fields.title} />
        <meta property="og:url" content={`www.tandemcomics.com/art/${projectPost.fields.slug}`} />
      </Head>

      <Layout>{/* <ProjectPostPage projectPost={projectPost} /> */}</Layout>
    </>
  );
}

ProjectPost.propTypes = {
  image: PropTypes.objectOf(PropTypes.any).isRequired,
};

export const getStaticProps: GetStaticProps = async (context) => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  // const projectPosts: ProjectProps[] = await client
  //   .getEntries<ProjectPropsFields>({ content_type: 'projects' })
  //   .then((response) => {
  //     const posts = generateProjectPosts(response.items);
  //     return posts;
  //   });

  const projectPost = await client
    .getEntries({ content_type: 'art', 'fields.slug': `${context.params.slug}` })
    .then((response) => response.items);

  // const index = projectPosts.findIndex(
  //   (projectPost) => projectPost.fields.slug === context.params.slug
  // );

  // const navigationPosts = getNextAndPrevious(projectPosts, index);

  return {
    props: {
      projectPost,
      // navigationPosts,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const projectPosts: ProjectProps[] = await client
    .getEntries<ProjectPropsFields>({ content_type: 'projects', order: 'sys.createdAt' })
    .then((response) => {
      const posts = generateProjectPosts(response.items);
      return posts;
    });

  const paths = projectPosts.map(({ fields: { slug } }) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export default ProjectPost;
