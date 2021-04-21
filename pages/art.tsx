import React, { ReactElement } from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { createClient } from 'contentful';
import ArtPage from '../src/components/pages/art';
import Layout from '../src/components/layout';

import { ImageProps } from '../src/types';

type ArtProps = {
  artPosts: ImageProps[];
};

function Art({ artPosts }: ArtProps): ReactElement {
  return (
    <>
      <Head>
        <title>Art | Adeola J. Adeyemo</title>
        <meta
          name="keywords"
          content="Adeola, Adeyemo, Joseph, Adeola Adeyemo, Adeola Adeyemo J., artist, digital art, character artists, lagos, nigeria,
          dejoe, dejoe art, de.joe, dejoe_art, deola art, deolaj, deola, balloon comics, balloon_comics, ballooon comics, comics"
        />

        <meta name="description" content="Art portfolio of Adeola Adeyemo" />

        <meta name="twitter:image:src" content="www.deolaj.com/portfolio-v2.png" />

        <meta name="twitter:site" content="Art | Adeola J. Adeyemo" />

        <meta name="twitter:title" content="Art | Adeola J. Adeyemo" />
        <meta name="twitter:description" content="Art portfolio of Adeola Adeyemo" />
        <meta property="og:image" content="www.deolaj.com/portfolio-v2.png" />
        <meta property="og:site_name" content="Art | Adeola J. Adeyemo" />

        <meta property="og:title" content="Art | Adeola J. Adeyemo" />

        <meta property="og:url" content="www.deolaj.com/art" />

        <meta property="og:description" content="Art portfolio of Adeola Adeyemo" />
      </Head>

      <Layout>
        <ArtPage art={artPosts} />
      </Layout>
    </>
  );
}

export default Art;

export const getStaticProps: GetStaticProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const artPosts = await client
    .getEntries({ content_type: 'art' })
    .then((response) => response.items);

  return {
    props: {
      artPosts,
    },
  };
};
