/* eslint-disable no-underscore-dangle */
import React, { ReactElement } from 'react';
import Head from 'next/head';
import { GetStaticProps, GetStaticPaths } from 'next';
import PropTypes from 'prop-types';
import { createClient } from 'contentful';

import Layout from '../../src/components/layout';
// import ArtPostPage from '../../src/components/posts/note';

import { ImageProps } from '../../src/types';
import { getNextAndPrevious } from '../../src/utils';

type ArtProps = {
  artPost: ImageProps;
};

function ArtPage({ artPost }: ArtProps): ReactElement {
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

      <Layout className="px-4 py-4 md:px-8 md:py-8">
        {/* <ArtPostPage artPost={artPost} /> */}
      </Layout>
    </>
  );
}

ArtPage.propTypes = {
  image: PropTypes.objectOf(PropTypes.any).isRequired,
};

export const getStaticProps: GetStaticProps = async (context) => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const artPosts = await client
    .getEntries({ content_type: 'art' })
    .then((response) => response.items);

  const artPost = await client
    .getEntries({ content_type: 'art', 'fields.slug': `${context.params.slug}` })
    .then((response) => response.items);

  const index = artPosts.findIndex((artPost) => artPost.fields.slug === context.params.slug);

  const navigationPosts = getNextAndPrevious(artPosts, index);

  return {
    props: {
      artPost,
      navigationPosts,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const artPosts = await client
    .getEntries({ content_type: 'art', order: 'sys.createdAt' })
    .then((response) => response.items);

  const paths = artPosts.map(({ fields: { slug } }) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export default ArtPage;
