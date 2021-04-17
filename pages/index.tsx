import React, { ReactElement } from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { createClient } from 'contentful';

import Global from '../src/components/global';
import Layout from '../src/components/layout';
import HomePage from '../src/components/pages/home';

import { TalkProps, BlogPostProps, NoteProps, ProjectProps } from '../src/types';

type HomeProps = {
  notes: NoteProps[];
  projects: ProjectProps[];
  talks: TalkProps[];
  blogPosts: BlogPostProps[];
};

export default function Home({ notes, blogPosts, projects, talks }: HomeProps): ReactElement {
  return (
    <>
      <Head>
        <title>Adeola J. Adeyemo</title>
        <meta
          name="keywords"
          content="Adeola, Adeyemo, Joseph, Adeola Adeyemo, Adeola Adeyemo J., front end, frontend, developer, react, ui engineer, frontend engineer, lagos, nigeria, front end developer, developer, dejoe, dejoe art, de.joe, dejoe_art, deola art, deolaj, deola, balloon comics, balloon_comics, ballooon comics, comics"
        />

        <meta name="description" content="Developer portfolio of Adeola Adeyemo" />

        <meta name="twitter:image:src" content="www.deolaj.com/portfolio-v2.png" />

        <meta name="twitter:site" content="Adeola J. Adeyemo" />

        <meta name="twitter:title" content="Adeola J. Adeyemo" />
        <meta name="twitter:description" content="Developer portfolio of Adeola Adeyemo" />
        <meta property="og:image" content="www.deolaj.com/portfolio-v2.png" />
        <meta property="og:site_name" content="Adeola J. Adeyemo" />

        <meta property="og:title" content="Adeola J. Adeyemo" />

        <meta property="og:url" content="www.deolaj.com" />

        <meta property="og:description" content="Developer portfolio of Adeola Adeyemo" />
      </Head>

      <Layout>
        <Global />
        <HomePage notes={notes} projects={projects} talks={talks} blogPosts={blogPosts} />
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const projects = await client
    .getEntries({
      content_type: 'projects',
      'fields.projectType': 'featured',
    })
    .then((response) => response.items);

  const talks = await client
    .getEntries({ content_type: 'talks' })
    .then((response) => response.items);

  const blogPosts = await client
    .getEntries({ content_type: 'blogPost', order: '-sys.createdAt' })
    .then((response) => response.items);

  const notes = await client
    .getEntries({ content_type: 'notes' })
    .then((response) => response.items);

  return {
    props: {
      talks,
      blogPosts,
      projects,
      notes,
    },
  };
};
