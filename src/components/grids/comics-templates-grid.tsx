import React, { FC } from 'react';

import ComicsTemplatesCard from '../partials/comics-templates-card';

import { CloudinaryImageProps } from '../../types';

type ComicsTemplatesGridProps = {
  comicsTemplates: CloudinaryImageProps[];
};

const ComicsTemplatesGrid: FC<ComicsTemplatesGridProps> = ({ comicsTemplates }) => (
  <section className="grid gap-8 my-10 place-content-between sm:gap-7 md:gap-10 sm:grid-cols-artgrid md:grid-cols-artgridMd">
    {comicsTemplates.reverse().map((comicsTemplate) => (
      <ComicsTemplatesCard comicsTemplate={comicsTemplate} key={comicsTemplate.public_id} />
    ))}
  </section>
);

export default ComicsTemplatesGrid;
