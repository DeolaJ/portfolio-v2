/* eslint-disable no-underscore-dangle */
import React, { ReactElement } from 'react';
import Head from 'next/head';
import { GetStaticProps, GetStaticPaths } from 'next';
import { createClient } from 'contentful';
import renderToString from 'next-mdx-remote/render-to-string';

import Layout from '../../src/components/layout';
import ProjectPostPage from '../../src/components/posts/project-post';

import { ProjectProps, ProjectPropsFields, ProjectPostProps } from '../../src/types';
import { getNextAndPrevious, generateProjectPosts } from '../../src/utils';

function ProjectPost({
  projectPost,
  navigationPosts,
  postContent,
}: ProjectPostProps): ReactElement {
  return (
    <>
      <Head>
        <title>
          {projectPost.fields.title}
          {' | Project'}
        </title>
        <meta
          name="keywords"
          content={`Adeola, Adeyemo, Joseph, Adeola Adeyemo, Adeola Adeyemo J., front end, frontend, developer, react, ui engineer, frontend engineer, lagos, nigeria, front end developer, developer, ${projectPost.fields.stack.join(
            ', '
          )}, ${projectPost.fields.title}`}
        />
        <meta name="twitter:title" content={projectPost.fields.title} />
        <meta property="og:title" content={projectPost.fields.title} />
        <meta name="twitter:site" content={projectPost.fields.title} />
        <meta property="og:url" content={`www.deolaj.com/projects/${projectPost.fields.slug}`} />
        <meta property="twitter:image:src" content={projectPost.fields.imageLink} />
        <meta property="og:image" content={projectPost.fields.imageLink} />
      </Head>

      <Layout>
        <ProjectPostPage
          postContent={postContent}
          navigationPosts={navigationPosts}
          projectPost={projectPost}
        />
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const projectPosts: ProjectProps[] = await client
    .getEntries<ProjectPropsFields>({ content_type: 'projects' })
    .then((response) => {
      const posts = generateProjectPosts(response.items);
      return posts;
    });

  const currentProjectPost: ProjectProps[] = await client
    .getEntries<ProjectPropsFields>({
      content_type: 'projects',
      'fields.slug': `${context.params.slug}`,
    })
    .then((response) => {
      const posts = generateProjectPosts(response.items);
      return posts;
    });

  const body = currentProjectPost[0].fields.body;
  const postContent = await renderToString(body);

  const index = projectPosts.findIndex(
    (projectPost) => projectPost.fields.slug === context.params.slug
  );

  const navigationPosts = getNextAndPrevious(projectPosts, index);

  return {
    props: {
      projectPost: currentProjectPost[0],
      navigationPosts,
      postContent,
    },
    revalidate: 300,
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
    fallback: 'blocking',
  };
};

export default ProjectPost;
