import React, { FC } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { Section, SectionTitle } from './partials/section';
import Button from './partials/button';
import { ImageWrapper } from './styled';

type HeaderProps = {
  title: string;
  subtitle: string;
  roles: string;
  imageLink: string;
  imgWidth: number;
  imgHeight: number;
};

const HeaderImageWrapper = styled.article`
  &::after {
    content: '';
    position: absolute;
    left: -50%;
    top: -140%;
    height: 200%;
    transform: translate(50%, 50%);
    z-index: -1;
    width: 100%;
    background-image: url('/purple-blob.svg'), url('/burned-orange-blob.svg'), url('/tea-blob.svg');
    background-position: 75% 12%, 23% 73%, 77% 74%;
    background-size: 14%, 10%, 16%;
    background-repeat: no-repeat;

    @media (min-width: 768px) {
      background-position: 70% 12%, 14% 73%, 86% 74%;
      background-size: 17%, 14%, 19%;
      left: -130%;
      top: -130%;
      height: 180%;
      width: 180%;
    }
  }
`;

const Header: FC<HeaderProps> = ({ title, subtitle, roles, imageLink, imgWidth, imgHeight }) => {
  return (
    <Section className="py-14 md:py-24">
      <div className="md:grid md:gap-8 md:grid-cols-5">
        <HeaderImageWrapper className="relative block w-full mb-6 md:hidden">
          <ImageWrapper className="w-1/2 mx-auto text-center md:max-w-xs">
            <Image
              src={imageLink}
              alt="hero illustration"
              width={0.75 * imgWidth}
              height={0.75 * imgHeight}
              layout="intrinsic"
            />
          </ImageWrapper>
        </HeaderImageWrapper>
        <article className="self-center py-6 text-center md:text-left md:col-start-1 md:col-end-4">
          <SectionTitle>{title}</SectionTitle>
          <h1 className="mb-4 text-4xl md:text-5xl lg:text-6xl md:leading-tight">{subtitle}</h1>
          <p className="mb-4 font-semibold">{roles}</p>
          <Button link="mailto:adeola.adeyemoj@gmail.com" text="Get in touch" />
        </article>
        <article className="self-center hidden justify-self-end md:block md:mb-0 md:col-start-4 md:col-end-6 md:w-auto">
          <HeaderImageWrapper className="relative w-full">
            <Image
              src={imageLink}
              alt="hero illustration"
              width={imgWidth}
              height={imgHeight}
              layout="intrinsic"
            />
          </HeaderImageWrapper>
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
