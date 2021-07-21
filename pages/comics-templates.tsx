import React, { ReactElement } from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import Link from 'next/link';

import Layout from '../src/components/layout';
import ComicsTemplateGrid from '../src/components/grids/comics-templates-grid';
import { Section, SectionTitleSub } from '../src/components/partials/section';
import Button from '../src/components/partials/button';

import { CloudinaryImageProps } from '../src/types';

type ComicsTemplatesProps = {
  comicsTemplates: CloudinaryImageProps[];
};

function ComicsTemplates({ comicsTemplates }: ComicsTemplatesProps): ReactElement {
  return (
    <>
      <Head>
        <title>Comic Templates | Balloon Comics</title>
        <meta
          name="keywords"
          content="Adeola, Adeyemo, Joseph, Adeola Adeyemo, Adeola Adeyemo J., artist, digital art, character artists, lagos, nigeria,
          dejoe, dejoe art, de.joe, dejoe_art, deola art, deolaj, deola, balloon comics, balloon_comics, ballooon comics, comics, comics templates"
        />

        <meta name="description" content="Comic Templates | Balloon Comics" />

        <meta
          name="twitter:image:src"
          content="https://res.cloudinary.com/dzpntisxj/image/upload/ar_1:1,b_rgb:f7d3c8,c_fill,co_rgb:ffffff,g_auto,w_1000/v1618660362/digital-art/IMG_4589_g6a1tx.png"
        />

        <meta name="twitter:site" content="Comic Templates | Balloon Comics" />

        <meta name="twitter:title" content="Comic Templates" />
        <meta name="twitter:description" content="Comic Templates | Balloon Comics" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dzpntisxj/image/upload/ar_1:1,b_rgb:f7d3c8,c_fill,co_rgb:ffffff,g_auto,w_1000/v1618660362/digital-art/IMG_4589_g6a1tx.png"
        />
        <meta property="og:site_name" content="Comic Templates | Balloon Comics" />

        <meta property="og:title" content="Comic Templates | Balloon Comics" />

        <meta property="og:url" content="www.deolaj.com/comic-templates" />

        <meta property="og:description" content="Comic Templates | Balloon Comics" />
      </Head>

      <Layout>
        <Section className="py-14 md:py-24">
          <SectionTitleSub>Balloon Comics Templates</SectionTitleSub>
          <article className="my-4">
            To use any of the templates
            <Button
              text="Get in touch"
              link="mailto:adeola.adeyemoj@gmail.com"
              className="inline-block ml-4"
              sub
            />
          </article>
          <ComicsTemplateGrid comicsTemplates={comicsTemplates} />
        </Section>
      </Layout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(
    `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUDNAME}/image/list/comicTemplate.json`
  );
  const templates = await res.json();
  const comicsTemplates = templates.resources;

  return {
    props: {
      comicsTemplates: comicsTemplates || [],
    },
  };
};

export default ComicsTemplates;
