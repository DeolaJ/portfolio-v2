import { FC } from 'react';

import Button from '../partials/button';
import Header from '../header';
import { Section, SectionTitle, SectionTitleSub } from '../partials/section';
import DonateForm from '../partials/donate-form';
import NFTCollectionGrid from '../partials/nft-collection-grid';
import NFTProfileGrid from '../partials/nft-profiles-grid';

const profiles = [
  {
    id: 1,
    imageLink:
      'https://res.cloudinary.com/dzpntisxj/image/upload/v1667732421/NFT%20collection%20banners/opensea-banner_byear5.png',
    imageHeight: 1712,
    imageWidth: 2966,
    title: 'Opensea',
    url: 'https://opensea.io/deola',
  },
  {
    id: 2,
    imageLink:
      'https://res.cloudinary.com/dzpntisxj/image/upload/v1667732421/NFT%20collection%20banners/foundation-banner_bvttqj.png',
    imageHeight: 1712,
    imageWidth: 2966,
    title: 'Foundation',
    url: 'https://foundation.app/@deola',
  },
  {
    id: 3,
    imageLink:
      'https://res.cloudinary.com/dzpntisxj/image/upload/v1667732421/NFT%20collection%20banners/rarible-banner_azke9e.png',
    imageHeight: 1712,
    imageWidth: 2966,
    title: 'Rarible',
    url: 'https://rarible.com/deola',
  },
  {
    id: 4,
    imageLink:
      'https://res.cloudinary.com/dzpntisxj/image/upload/v1667732421/NFT%20collection%20banners/objkt-banner_gelddr.png',
    imageHeight: 1712,
    imageWidth: 2966,
    title: 'Objkt',
    url: 'https://objkt.com/profile/tz1UvK9hZcsYjNY8DdCaYeore27qf19kA2tk/created',
  },
];

const openseaCollections = [
  {
    id: 1,
    imageLink:
      'https://res.cloudinary.com/dzpntisxj/image/upload/v1667731767/NFT%20collection%20banners/inner-bliss-banner_axwmqz.jpg',
    imageHeight: 2304,
    imageWidth: 4096,
    title: 'Inner Bliss',
    url: 'https://opensea.io/collection/inner-bliss',
    subtitle:
      'This collection contains hand-drawn digital paintings, based on amazing female references and friends. Each piece invokes a feeling of joy and gladness, created using colors and scenes that shined bright through my eyes',
    tags: ['portrait', 'digital', 'procreate', '2D'],
  },
  {
    id: 2,
    imageLink:
      'https://res.cloudinary.com/dzpntisxj/image/upload/v1667731766/NFT%20collection%20banners/mono-girls-banner_nlf4rt.jpg',
    imageHeight: 2250,
    imageWidth: 4000,
    title: 'Mono Girls',
    url: 'https://opensea.io/collection/mono-girls',
    subtitle:
      'A collection of unique monochrome girls that celebrates the flexibility of our existence.',
    tags: ['digital', 'procreate', '2D', 'monochrome'],
  },
  {
    id: 3,
    imageLink:
      'https://res.cloudinary.com/dzpntisxj/image/upload/v1667731766/NFT%20collection%20banners/nebuloid-banner_tiqsrb.jpg',
    imageHeight: 1194,
    imageWidth: 2891,
    title: 'Nebuloid Celestials',
    url: 'https://opensea.io/collection/nebuloid-celestials',
    subtitle:
      'Nebuloid Celestials are mysterious, faceless beings with unique powers. They also create nebuloids and imbue them with strong personalities for unique purposes.',
    tags: ['digital', 'procreate', '2D', 'faceless'],
  },
  {
    id: 4,
    imageLink:
      'https://res.cloudinary.com/dzpntisxj/image/upload/v1667731767/NFT%20collection%20banners/balloon-comics-banner_fc6lvx.png',
    imageHeight: 924,
    imageWidth: 1640,
    title: 'Balloon Comics #2',
    url: 'https://opensea.io/collection/balloon-comics-2',
    subtitle:
      'Balloon Comics is a banter comics series that is focused on democratizing comic and meme culture. This is a collection of the second Issue of the Balloon Comics characters.',
    tags: ['comics', 'digital', 'procreate', '2D', 'monochrome'],
  },
  {
    id: 5,
    imageLink:
      'https://res.cloudinary.com/dzpntisxj/image/upload/v1667731767/NFT%20collection%20banners/coats-banner_ugijso.jpg',
    imageHeight: 3464,
    imageWidth: 3464,
    title: 'Coats of Many Colors',
    url: 'https://opensea.io/collection/coats-of-many-colors',
    subtitle:
      'Coats of many colors is a collection that highlights the story of 7 black women and their struggle with the themselves.',
    tags: ['digital', 'procreate', '2D'],
  },
];

const foundationCollections = [
  {
    id: 1,
    imageLink:
      'https://res.cloudinary.com/dzpntisxj/image/upload/v1667731769/NFT%20collection%20banners/eod-banner_q2mpo8.png',
    imageHeight: 2400,
    imageWidth: 2880,
    title: 'Expression of self',
    url: 'https://foundation.app/@deola/expression-of-self',
    tags: ['portrait', 'digital', 'procreate', '2D', 'colorful'],
  },
];

const NFTPage: FC = () => {
  return (
    <section>
      <Header
        title="Hello, I'm Deola"
        subtitle="I sell my Digital art as NFTs"
        roles="Digital Artist and Comic Illustrator."
        imageLink="https://res.cloudinary.com/dzpntisxj/image/upload/v1637828679/digital-art/93271852-FBA7-49A0-A5DF-44DC966D7AAB_ndtarh.png"
        imgWidth={350 * 1.25}
        imgHeight={420 * 1.25}
      />

      <Section>
        <SectionTitle className="font-bold text-lg">NFT Portfolio</SectionTitle>
        <SectionTitle>Marketplaces</SectionTitle>
        <NFTProfileGrid profiles={profiles} />
      </Section>

      <Section>
        <SectionTitle className="font-bold text-lg">NFT Collections</SectionTitle>

        <SectionTitle>Opensea Collections</SectionTitle>
        <NFTCollectionGrid collections={openseaCollections} />

        <SectionTitle>Foundation</SectionTitle>
        <NFTCollectionGrid collections={foundationCollections} />
      </Section>

      <Section>
        <SectionTitle>Virtual Gallery</SectionTitle>
        <SectionTitle className="font-bold text-lg">Cyber</SectionTitle>
        <article className="my-4 flex">
          <a href="https://oncyber.io/spaces/AwoRulAypBrdLYZ31aZF">
            <Button text="Deola's Gallery" className="inline-block" />
          </a>
        </article>
      </Section>

      <Section>
        <SectionTitle className="text-xl">Donate</SectionTitle>
        <SectionTitle className="font-bold text-lg">Support my NFT journey</SectionTitle>
        <article className="my-6">
          <p>
            If you love my work and want to show support, enter any amount below and click transfer
          </p>
          <DonateForm />
        </article>
      </Section>
    </section>
  );
};

export default NFTPage;
