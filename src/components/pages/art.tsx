import React, { FC } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import Header from '../header';
import ArtGrid from '../grids/art-grid';
import { Section, SectionTitle, SectionTitleSub } from '../partials/section';
import Button from '../partials/button';

import { ImageProps } from '../../types';

type ArtPageProps = {
  art: ImageProps[];
};

const ArtPage: FC<ArtPageProps> = ({ art }) => {
  return (
    <section>
      <Header
        title="Heyy, I'm Adeola"
        subtitle="I paint digitally"
        roles="Digital Artist and Comic Illustrator."
        imageLink="https://res.cloudinary.com/dzpntisxj/image/upload/v1618333836/digital-art/IMG_4579_oza4ew.png"
        imgWidth={480 * 1.25}
        imgHeight={580 * 1.25}
      />
      <ArtGrid art={art} />
      <Section>
        <SectionTitle>Comics</SectionTitle>
        <SectionTitleSub>Balloon Comics Templates.</SectionTitleSub>
        <article className="my-4">
          <Link href="/comics-templates">
            <a>
              <Button text="Click to view templates" className="inline-block" />
            </a>
          </Link>
        </article>
      </Section>
    </section>
  );
};

ArtPage.propTypes = {
  art: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default ArtPage;
