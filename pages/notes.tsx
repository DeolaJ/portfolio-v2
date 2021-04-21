import React, { ReactElement } from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { createClient } from 'contentful';

import NotesPage from '../src/components/pages/notes';
import Layout from '../src/components/layout';

import { NoteProps } from '../src/types';

type NotesProps = {
  notesPost: NoteProps[];
};

function Notes({ notesPost }: NotesProps): ReactElement {
  return (
    <>
      <Head>
        <title>Notes | Adeola J. Adeyemo</title>
        <meta
          name="keywords"
          content="Adeola, Adeyemo, Joseph, notes, blog posts, blog, developer blog, posts, Adeola Adeyemo, Adeola Adeyemo J., front end, frontend, developer, react, ui engineer, frontend engineer, lagos, nigeria,
          front end developer, developer, dejoe, dejoe art, de.joe, dejoe_art, deola art, deolaj, deola, balloon comics, balloon_comics, ballooon comics, comics"
        />

        <meta name="description" content="Developer Notes of Adeola Adeyemo" />

        <meta name="twitter:image:src" content="www.deolaj.com/portfolio-v2.png" />

        <meta name="twitter:site" content="Notes | Adeola J. Adeyemo" />

        <meta name="twitter:title" content="Notes | Adeola J. Adeyemo" />
        <meta name="twitter:description" content="Developer Notes of Adeola Adeyemo" />
        <meta property="og:image" content="www.deolaj.com/portfolio-v2.png" />
        <meta property="og:site_name" content="Notes | Adeola J. Adeyemo" />

        <meta property="og:title" content="Notes | Adeola J. Adeyemo" />

        <meta property="og:url" content="www.deolaj.com/notes" />

        <meta property="og:description" content="Developer Notes of Adeola Adeyemo" />
      </Head>

      <Layout>
        <NotesPage notes={notesPost} />
      </Layout>
    </>
  );
}

export default Notes;

export const getStaticProps: GetStaticProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const notesPost = await client
    .getEntries({ content_type: 'notes' })
    .then((response) => response.items);

  return {
    props: {
      notesPost,
    },
  };
};
