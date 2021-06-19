/* eslint-disable no-underscore-dangle */
import React, { ReactElement } from 'react';
import Head from 'next/head';
import { GetStaticProps, GetStaticPaths } from 'next';
import { createClient } from 'contentful';

import Layout from '../../src/components/layout';
import ArtPostPage from '../../src/components/posts/art-post';

import { ImageProps, ImagePropsFields, ArtPostProps } from '../../src/types';
import { getNextAndPrevious, generateArtPosts } from '../../src/utils';

function ArtPost({ artPost, navigationPosts }: ArtPostProps): ReactElement {
  return (
    <>
      <Head>
        <title>
          {artPost.fields.title}
          {' | Art'}
        </title>
        <meta name="twitter:title" content={artPost.fields.title} />
        <meta property="og:title" content={artPost.fields.title} />
        <meta name="twitter:site" content={artPost.fields.title} />
        <meta property="og:url" content={`www.tandemcomics.com/art/${artPost.fields.slug}`} />
      </Head>

      <Layout>
        <ArtPostPage navigationPosts={navigationPosts} artPost={artPost} />
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const artPosts: ImageProps[] = await client
    .getEntries<ImagePropsFields>({ content_type: 'art' })
    .then((response) => {
      const posts = generateArtPosts(response.items);
      return posts;
    });

  const currentArtPost: ImageProps[] = await client
    .getEntries<ImagePropsFields>({ content_type: 'art', 'fields.slug': `${context.params.slug}` })
    .then((response) => {
      const posts = generateArtPosts(response.items);
      return posts;
    });

  const index = artPosts.findIndex((artPost) => artPost.fields.slug === context.params.slug);

  const navigationPosts = getNextAndPrevious(artPosts, index);

  return {
    props: {
      artPost: currentArtPost[0],
      navigationPosts,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const artPosts: ImageProps[] = await client
    .getEntries<ImagePropsFields>({ content_type: 'art', order: 'sys.createdAt' })
    .then((response) => {
      const posts = generateArtPosts(response.items);
      return posts;
    });

  const paths = artPosts.map(({ fields: { slug } }) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export default ArtPost;
