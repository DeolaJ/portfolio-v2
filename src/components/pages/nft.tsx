import { FC } from 'react';

import Button from '../partials/button';
import Header from '../header';
import { Section, SectionTitle, SectionTitleSub } from '../partials/section';
import DonateForm from '../partials/donate-form';

const DonatePage: FC = () => {
  return (
    <section>
      <Header
        title="Hello, I'm Deola (Dejoe)"
        subtitle="I draw NFT Art"
        roles="Digital Artist and Comic Illustrator."
        imageLink="https://res.cloudinary.com/dzpntisxj/image/upload/v1637828679/digital-art/93271852-FBA7-49A0-A5DF-44DC966D7AAB_ndtarh.png"
        imgWidth={350 * 1.25}
        imgHeight={420 * 1.25}
      />
      <Section>
        <SectionTitle>NFT Portfolio</SectionTitle>
        <SectionTitleSub>Opensea and Foundation Pages</SectionTitleSub>
        <article className="my-4 flex">
          <a href="https://foundation.app/@deola">
            <Button text="Foundation NFTs" className="inline-block" />
          </a>
          <a href="https://opensea.io/deola">
            <Button text="Opensea NFTs" className="inline-block ml-6" />
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
