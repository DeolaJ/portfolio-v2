import { FC } from 'react';

import Button from '../partials/button';
import Header from '../header';
import { Section, SectionTitle, SectionTitleSub } from '../partials/section';
import DonateForm from '../partials/donate-form';

const DonatePage: FC = () => {
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
        <SectionTitle>NFT Portfolio</SectionTitle>
        <SectionTitleSub>Marketplaces</SectionTitleSub>
        <article className="my-4 flex flex-wrap gap-6">
          <a href="https://foundation.app/@deola">
            <Button text="Foundation NFTs" className="inline-block" />
          </a>
          <a href="https://opensea.io/deola">
            <Button text="Opensea NFTs" className="inline-block" />
          </a>
          <a href="https://rarible.com/deola">
            <Button text="Rarible NFTs" className="inline-block" />
          </a>
        </article>
      </Section>

      <Section>
        <SectionTitle>NFT Collections</SectionTitle>

        <SectionTitleSub>Opensea Collections</SectionTitleSub>
        <article className="my-4 flex flex-wrap gap-6 mb-7">
          <a href="https://opensea.io/collection/coats-of-many-colors">
            <Button text="Coats of Many Colors" className="inline-block" />
          </a>
          <a href="https://opensea.io/collection/balloon-comics-2">
            <Button text="Balloon Comics #2" className="inline-block" />
          </a>
          <a href="https://opensea.io/collection/nebuloid-celestials">
            <Button text="Nebuloid Celestials" className="inline-block" />
          </a>
          <a href="https://opensea.io/collection/mono-girls">
            <Button text="Mono Girls" className="inline-block" />
          </a>
          <a href="https://opensea.io/collection/inner-bliss">
            <Button text="Inner Bliss" className="inline-block" />
          </a>
        </article>

        <SectionTitleSub>Foundation</SectionTitleSub>
        <article className="my-4 flex">
          <a href="https://foundation.app/@deola/expression-of-self">
            <Button text="Expression of self" className="inline-block" />
          </a>
        </article>
      </Section>

      <Section>
        <SectionTitle>Virtual Gallery</SectionTitle>
        <SectionTitleSub>Cyber</SectionTitleSub>
        <article className="my-4 flex">
          <a href="https://oncyber.io/spaces/AwoRulAypBrdLYZ31aZF">
            <Button text="Deola's Gallery" className="inline-block" />
          </a>
        </article>
      </Section>
      <Section>
        <SectionTitle className="text-xl">Donate</SectionTitle>
        <SectionTitleSub>Support my NFT journey</SectionTitleSub>
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

export default DonatePage;
