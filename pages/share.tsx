import React, { ReactElement } from 'react';
import Head from 'next/head';

import Layout from '../src/components/layout';
import SharePage from '../src/components/pages/share';

function Share(): ReactElement {
  return (
    <>
      <Head>
        <title>Links | Adeola Adeyemo</title>
        <meta
          name="keywords"
          content="Adeola, Adeyemo, Joseph, Adeola Adeyemo, Adeola Adeyemo J., artist, share, digital art, character artists, lagos, nigeria, art,
          dejoe, dejoe art, de.joe, dejoe_art, deola art, deolaj, deola, balloon comics, balloon_comics, ballooon comics, comics, comics templates, commissions, art commissions, nft, non-fungible tokens, nfts, nft art"
        />

        <meta name="description" content="View my personal links" />

        <meta
          name="twitter:image:src"
          content="https://res.cloudinary.com/dzpntisxj/image/upload/v1619022408/portfolio/portfolio_zw5ozm.png"
        />

        <meta name="twitter:site" content="View my personal links" />

        <meta name="twitter:title" content="Links | Adeola Adeyemo" />
        <meta name="twitter:description" content="View my personal links" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dzpntisxj/image/upload/v1619022408/portfolio/portfolio_zw5ozm.png"
        />
        <meta property="og:site_name" content="Links | Adeola Adeyemo" />

        <meta property="og:title" content="Links | Adeola Adeyemo" />

        <meta property="og:url" content="www.deolaj.com/share" />

        <meta property="og:description" content="View my personal links" />
      </Head>

      <Layout>
        <SharePage />
      </Layout>
    </>
  );
}

export default Share;
