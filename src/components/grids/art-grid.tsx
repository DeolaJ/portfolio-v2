import React, { FC } from 'react';
import PropTypes from 'prop-types';
import { Section, SectionTitle, SectionTitleSub } from '../partials/section';

import ArtCard from '../partials/art-card';

import { ImageProps } from '../../types';

type ArtGridProps = {
  art: ImageProps[];
};

const ArtGrid: FC<ArtGridProps> = ({ art }) => {
  if (!art.length) {
    return <p>There are no art pieces at the moment</p>;
  }

  return (
    <Section>
      <SectionTitle>Digital Paintings</SectionTitle>
      <SectionTitleSub>Some Recent Drawings for pleasure</SectionTitleSub>

      <section className="grid gap-8 my-16 place-content-between sm:gap-7 md:gap-10 sm:grid-cols-artgrid md:grid-cols-artgridMd">
        {art.map((artPost) => (
          <ArtCard art={artPost} key={artPost.fields.title} />
        ))}
      </section>
    </Section>
  );
};

ArtGrid.propTypes = {
  art: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default ArtGrid;
