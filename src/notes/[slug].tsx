/* eslint-disable no-underscore-dangle */
import React, { ReactElement } from 'react';
import Head from 'next/head';
import { GetStaticProps, GetStaticPaths } from 'next';
import PropTypes from 'prop-types';
import { createClient } from 'contentful';

import Layout from '../../src/components/layout';
// import NotePostPage from '../../src/components/posts/note';

import { NoteProps, NotePropsFields } from '../../src/types';
// import { getNextAndPrevious, generateNotePosts } from '../../src/utils';
import { generateNotePosts } from '../../src/utils';

type NotePostProps = {
  notePost: NoteProps;
};

function NotePost({ notePost }: NotePostProps): ReactElement {
  return (
    <>
      <Head>
        <title>
          {notePost.fields.title}
          {' | Note'}
        </title>
        <meta name="twitter:title" content={notePost.fields.title} />
        <meta property="og:title" content={notePost.fields.title} />
        <meta name="twitter:site" content={notePost.fields.title} />
        <meta property="og:url" content={`www.tandemcomics.com/art/${notePost.fields.slug}`} />
      </Head>

      <Layout>{/* <NotePostPage notePost={notePost} /> */}</Layout>
    </>
  );
}

NotePost.propTypes = {
  image: PropTypes.objectOf(PropTypes.any).isRequired,
};

export const getStaticProps: GetStaticProps = async (context) => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  // const notePosts: NoteProps[] = await client
  //   .getEntries<NotePropsFields>({ content_type: 'notes' })
  //   .then((response) => {
  //     const posts = generateNotePosts(response.items);
  //     return posts;
  //   });

  const notePost = await client
    .getEntries({ content_type: 'art', 'fields.slug': `${context.params.slug}` })
    .then((response) => response.items);

  // const index = notePosts.findIndex((notePost) => notePost.fields.slug === context.params.slug);

  // const navigationPosts = getNextAndPrevious(notePosts, index);

  return {
    props: {
      notePost,
      // navigationPosts,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const notePosts: NoteProps[] = await client
    .getEntries<NotePropsFields>({ content_type: 'notes', order: 'sys.createdAt' })
    .then((response) => {
      const posts = generateNotePosts(response.items);
      return posts;
    });

  const paths = notePosts.map(({ fields: { slug } }) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export default NotePost;
