import React, { FC } from 'react';
import PropTypes from 'prop-types';

import Header from '../header';
import ArtGrid from '../grids/art-grid';

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
    </section>
  );
};

ArtPage.propTypes = {
  art: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default ArtPage;
