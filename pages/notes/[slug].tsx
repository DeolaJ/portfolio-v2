/* eslint-disable no-underscore-dangle */
import React, { ReactElement } from 'react';
import Head from 'next/head';
import { GetStaticProps, GetStaticPaths } from 'next';
import renderToString from 'next-mdx-remote/render-to-string';
import { createClient } from 'contentful';

import Layout from '../../src/components/layout';
import NotePostPage from '../../src/components/posts/note-post';

import { NoteProps, NotePropsFields, NotePostProps } from '../../src/types';
import { getNextAndPrevious, generateNotePosts } from '../../src/utils';

function NotePost({ notePost, navigationPosts, postContent }: NotePostProps): ReactElement {
  return (
    <>
      <Head>
        <title>
          {notePost.fields.title}
          {' | Note'}
        </title>

        <meta
          name="keywords"
          content={`Adeola, Adeyemo, Joseph, Adeola Adeyemo, Adeola Adeyemo J., front end, frontend, developer, react, ui engineer, frontend engineer, lagos, nigeria, front end developer, developer, ${notePost.fields.tags.join(
            ', '
          )}, ${notePost.fields.title}`}
        />

        <meta name="twitter:image:src" content={notePost.fields.imageLink} />
        <meta name="twitter:title" content={notePost.fields.title} />
        <meta property="og:title" content={notePost.fields.title} />
        <meta name="twitter:description" content={notePost.fields.subtitle} />
        <meta name="og:description" content={notePost.fields.subtitle} />
        <meta name="twitter:site" content={notePost.fields.title} />
        <meta property="og:url" content={`www.deolaj.com/notes/${notePost.fields.slug}`} />
        <meta property="og:image" content={notePost.fields.imageLink} />
        <meta property="og:site_name" content={notePost.fields.title} />
      </Head>

      <Layout>
        <NotePostPage
          postContent={postContent}
          navigationPosts={navigationPosts}
          notePost={notePost}
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

  const notePosts: NoteProps[] = await client
    .getEntries<NotePropsFields>({ content_type: 'notes', order: 'sys.createdAt' })
    .then((response) => {
      const posts = generateNotePosts(response.items);
      return posts;
    });

  const currentNotePost: NoteProps[] = await client
    .getEntries<NotePropsFields>({
      content_type: 'notes',
      'fields.slug': `${context.params.slug}`,
    })
    .then((response) => {
      const posts = generateNotePosts(response.items);
      return posts;
    });

  const body = currentNotePost[0].fields.body;
  const postContent = await renderToString(body);

  const index = notePosts.findIndex((notePost) => notePost.fields.slug === context.params.slug);

  const navigationPosts = getNextAndPrevious(notePosts, index);

  return {
    props: {
      notePost: currentNotePost[0],
      navigationPosts,
      postContent,
    },
    revalidate: 30,
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
    fallback: 'blocking',
  };
};

export default NotePost;
