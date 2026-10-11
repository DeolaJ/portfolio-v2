import React, { ReactElement } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';

import Layout from '../src/components/layout';
import CommissionsList from '../src/components/pages/commissions-list';
import { Section, SectionTitle } from '../src/components/partials/section';
import Button from '../src/components/partials/button';
import { fadeInUp } from '../src/animation';

function ArtCommissions(): ReactElement {
  return (
    <>
      <Head>
        <title>Art Commissions</title>
        <meta
          name="keywords"
          content="Adeola, Adeyemo, Joseph, Adeola Adeyemo, Adeola Adeyemo J., artist, digital art, character artists, lagos, nigeria, art,
          dejoe, dejoe art, de.joe, dejoe_art, deola art, deolaj, deola, balloon comics, balloon_comics, ballooon comics, comics, comics templates, commissions, art commissions"
        />

        <meta name="description" content="Make a request for art commissions" />

        <meta
          name="twitter:image:src"
          content="https://res.cloudinary.com/dzpntisxj/image/upload/b_rgb:ffd6c1,c_fill,g_north_east,h_720,w_1280,x_0,y_0/v1618333836/digital-art/IMG_4579_oza4ew.png"
        />

        <meta name="twitter:site" content="Make a request for art commissions" />

        <meta name="twitter:title" content="Art Commissions" />
        <meta name="twitter:description" content="Make a request for art commissions" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dzpntisxj/image/upload/b_rgb:ffd6c1,c_fill,g_north_east,h_720,w_1280,x_0,y_0/v1618333836/digital-art/IMG_4579_oza4ew.png"
        />
        <meta property="og:site_name" content="Art Commissions" />

        <meta property="og:title" content="Art Commissions" />

        <meta property="og:url" content="www.deolaj.com/art-commissions" />

        <meta property="og:description" content="Make a request for art commissions" />
      </Head>

      <Layout>
        <Section className="py-14 md:pt-20 md:max-w-5xl md:mx-auto">
          <motion.h1
            variants={fadeInUp}
            transition={{ delay: 0.3 }}
            className="mb-4 text-center text-3xl lg:text-4xl md:leading-tight">
            <strong>Art Commission Info</strong>
          </motion.h1>

          <SectionTitle className="text-xl">Introduction</SectionTitle>

          <article className="my-4">
            <p>
              If you want to request for art commissions from me, please read through this page to
              get an overview of my current rates and services.
            </p>
            <p className="mt-4">
              Also ensure you read through my the terms of my art commission. This applies to
              personal use of the commission and not commercial use (which is treated on a case
              basis)
            </p>
            <p className="text-center my-6">
              <Link href="/commissions-terms">
                <a>
                  <Button text="Terms of commission" className="inline-block ml-4" />
                </a>
              </Link>
            </p>
          </article>
        </Section>
        <CommissionsList />
      </Layout>
    </>
  );
}

export default ArtCommissions;
