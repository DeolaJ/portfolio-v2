import React, { ReactElement } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';

import Layout from '../src/components/layout';
import CommissionsTerms from '../src/components/pages/commissions-terms';
import { fadeInUp } from '../src/animation';
import { Section } from '../src/components/partials/section';

function CommissionTerms(): ReactElement {
  return (
    <>
      <Head>
        <title>Commissions | Terms and Conditions</title>
        <meta
          name="keywords"
          content="Adeola, Adeyemo, Joseph, Adeola Adeyemo, Adeola Adeyemo J., artist, digital art, character artists, lagos, nigeria, art,
          dejoe, dejoe art, de.joe, dejoe_art, deola art, deolaj, deola, balloon comics, balloon_comics, ballooon comics, comics, comics templates, commissions, art commissions"
        />

        <meta
          name="description"
          content="Terms and Conditions for art commissions concerning personal use"
        />

        <meta
          name="twitter:image:src"
          content="https://res.cloudinary.com/dzpntisxj/image/upload/b_rgb:ffd6c1,c_fill,g_north_east,h_720,w_1280,x_0,y_0/v1618333836/digital-art/IMG_4579_oza4ew.png"
        />

        <meta
          name="twitter:site"
          content="Terms and Conditions for art commissions concerning personal use"
        />

        <meta name="twitter:title" content="Commission | Terms and Conditions" />
        <meta
          name="twitter:description"
          content="Terms and Conditions for art commissions concerning personal use"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dzpntisxj/image/upload/b_rgb:ffd6c1,c_fill,g_north_east,h_720,w_1280,x_0,y_0/v1618333836/digital-art/IMG_4579_oza4ew.png"
        />
        <meta property="og:site_name" content="Commission | Terms and Conditions" />

        <meta property="og:title" content="Commission | Terms and Conditions" />

        <meta property="og:url" content="www.deolaj.com/commissions-terms-and-conditions" />

        <meta
          property="og:description"
          content="Terms and Conditions for art commissions concerning personal use"
        />
      </Head>

      <Layout>
        <Section className="pt-24 pb-20">
          <motion.h1
            variants={fadeInUp}
            transition={{ delay: 0.3 }}
            className="text-center text-3xl lg:text-4xl md:leading-tight">
            <strong>Art Commissions - Terms and Conditions</strong>
          </motion.h1>
        </Section>
        <CommissionsTerms />
      </Layout>
    </>
  );
}

export default CommissionTerms;
