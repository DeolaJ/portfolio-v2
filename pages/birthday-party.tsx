import React, { ReactElement } from 'react';
import Head from 'next/head';

import Layout from '../src/components/layout';
import BirthdayPartyPage from '../src/components/pages/birthday-party';

function BirthdayParty(): ReactElement {
  return (
    <>
      <Head>
        <title>Birthday Party | Adeola Adeyemo</title>
        <meta
          name="keywords"
          content="Adeola, Adeyemo, Joseph, Adeola Adeyemo, Adeola Adeyemo J., artist, digital art, character artists, lagos, nigeria, art,
          dejoe, dejoe art, de.joe, dejoe_art, deola art, deolaj, deola, balloon comics, balloon_comics, ballooon comics, comics, comics templates, commissions, art commissions, nft, non-fungible tokens, nfts, nft art"
        />

        <meta name="description" content="Details about my birthday party on the 22nd" />

        <meta
          name="twitter:image:src"
          content="https://res.cloudinary.com/dzpntisxj/image/upload/c_crop,g_center,h_2000,w_3200/v1637825191/digital-art/Untitled_Artwork_e27daz.jpg"
        />

        <meta name="twitter:site" content="Details about my birthday party on the 22nd" />

        <meta name="twitter:title" content="Birthday Party| Adeola Adeyemo" />
        <meta name="twitter:description" content="Details about my birthday party on the 22nd" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dzpntisxj/image/upload/c_crop,g_center,h_2000,w_3200/v1637825191/digital-art/Untitled_Artwork_e27daz.jpg"
        />
        <meta property="og:site_name" content="Birthday Party| Adeola Adeyemo" />

        <meta property="og:title" content="Birthday Party| Adeola Adeyemo" />

        <meta property="og:url" content="www.deolaj.com/birthday-party" />

        <meta property="og:description" content="Details about my birthday party on the 22nd" />
      </Head>

      <Layout>
        <BirthdayPartyPage />
      </Layout>
    </>
  );
}

export default BirthdayParty;
