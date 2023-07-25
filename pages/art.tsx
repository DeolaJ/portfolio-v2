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

        <meta
          name="twitter:image:src"
          content="https://res.cloudinary.com/dzpntisxj/image/upload/b_rgb:ffd6c1,c_fill,g_north_east,h_720,w_1280,x_0,y_0/v1618333836/digital-art/IMG_4579_oza4ew.png"
        />

        <meta name="twitter:site" content="Art | Adeola J. Adeyemo" />

        <meta name="twitter:title" content="Art | Adeola J. Adeyemo" />
        <meta name="twitter:description" content="Art portfolio of Adeola Adeyemo" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dzpntisxj/image/upload/b_rgb:ffd6c1,c_fill,g_north_east,h_720,w_1280,x_0,y_0/v1618333836/digital-art/IMG_4579_oza4ew.png"
        />
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
    revalidate: 300,
  };
};
