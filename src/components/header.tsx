import React, { FC } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';

import { Section, SectionTitle } from './partials/section';
import Button from './partials/button';

type HeaderProps = {
  title: string;
  subtitle: string;
  roles: string;
  imageLink: string;
  imgWidth: number;
  imgHeight: number;
};

const Header: FC<HeaderProps> = ({ title, subtitle, roles, imageLink, imgWidth, imgHeight }) => {
  return (
    <Section>
      <div className="md:grid md:gap-8 md:grid-cols-5">
        <article className="block w-full mb-6 md:hidden">
          <div className="w-1/2 mx-auto text-center md:max-w-xs">
            <Image
              src={imageLink}
              alt="hero illustration"
              width={0.5 * imgWidth}
              height={0.5 * imgHeight}
              layout="intrinsic"
            />
          </div>
        </article>
        <article className="self-center py-6 text-center md:text-left md:col-start-1 md:col-end-4">
          <SectionTitle>{title}</SectionTitle>
          <h1 className="mb-4 text-4xl md:text-5xl lg:text-6xl md:leading-tight">{subtitle}</h1>
          <p className="mb-4 font-semibold">{roles}</p>
          <Button link="mailto:adeola.adeyemoj@gmail.com" text="Get in touch" />
        </article>
        <article className="self-center hidden justify-self-end md:block md:mb-0 md:col-start-4 md:col-end-6 md:w-auto">
          <div className="w-full">
            <Image
              src={imageLink}
              alt="hero illustration"
              width={imgWidth}
              height={imgHeight}
              layout="intrinsic"
            />
          </div>
        </article>
      </div>
    </Section>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  imageLink: PropTypes.string.isRequired,
  roles: PropTypes.string.isRequired,
  imgHeight: PropTypes.number.isRequired,
  imgWidth: PropTypes.number.isRequired,
};

export default Header;
