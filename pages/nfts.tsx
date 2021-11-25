import React, { ReactElement } from 'react';
import Head from 'next/head';

import Layout from '../src/components/layout';
import NFTPage from '../src/components/pages/nft';

function NFTs(): ReactElement {
  return (
    <>
      <Head>
        <title>NFTs | Adeola Adeyemo</title>
        <meta
          name="keywords"
          content="Adeola, Adeyemo, Joseph, Adeola Adeyemo, Adeola Adeyemo J., artist, digital art, character artists, lagos, nigeria, art,
          dejoe, dejoe art, de.joe, dejoe_art, deola art, deolaj, deola, balloon comics, balloon_comics, ballooon comics, comics, comics templates, commissions, art commissions, nft, non-fungible tokens, nfts, nft art"
        />

        <meta name="description" content="My NFT Portfolio" />

        <meta
          name="twitter:image:src"
          content="https://res.cloudinary.com/dzpntisxj/image/upload/c_crop,g_center,h_2000,w_3200/v1637825191/digital-art/Untitled_Artwork_e27daz.jpg"
        />

        <meta name="twitter:site" content="My NFT portfolio" />

        <meta name="twitter:title" content="NFTs | Adeola Adeyemo" />
        <meta name="twitter:description" content="My NFT portfolio" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dzpntisxj/image/upload/c_crop,g_center,h_2000,w_3200/v1637825191/digital-art/Untitled_Artwork_e27daz.jpg"
        />
        <meta property="og:site_name" content="NFTs | Adeola Adeyemo" />

        <meta property="og:title" content="NFTs | Adeola Adeyemo" />

        <meta property="og:url" content="www.deolaj.com/NFTs | Adeola Adeyemo" />

        <meta property="og:description" content="My NFT portfolio" />
      </Head>

      <Layout>
        <NFTPage />
      </Layout>
    </>
  );
}

export default NFTs;
