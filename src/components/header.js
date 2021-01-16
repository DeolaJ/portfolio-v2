import React from 'react';
import Image from 'next/image';
import { Section, SectionTitle } from './partials/section';
import Button from './partials/button';

const Header = () => {
  return (
    <Section>
      <div className="md:grid md:gap-8 md:grid-cols-5">
        <article className="block w-full mb-6 md:hidden">
          <div className="w-1/2 mx-auto md:max-w-xs">
            <Image
              src="/hero.png"
              alt="hero illustration"
              width={300}
              height={450}
              layout="intrinsic"
              priority="true"
            />
          </div>
        </article>
        <article className="md:col-start-1 md:col-end-4">
          <SectionTitle>Hi, I am</SectionTitle>
          <h1 className="mb-4 text-4xl md:text-5xl lg:text-7xl md:leading-tight">
            Adeola Adeyemo.
            <br />
            I build web interfaces.
          </h1>
          <p className="mb-4">
            Front end Developer, Technical writer, Digital &amp; Comic Illustrator, and everything
            in between.
          </p>
          <Button href="mailto:adeola.adeyemoj@gmail.com" text="Get in touch" />
        </article>
        <article className="hidden md:block md:mb-0 md:col-start-4 md:col-end-6 md:w-auto">
          <div className="w-full md:-mt-12 lg:-mt-24">
            <Image
              src="/hero.png"
              alt="hero illustration"
              width={403}
              height={604}
              layout="intrinsic"
              priority="true"
            />
          </div>
        </article>
      </div>
    </Section>
  );
};

export default Header;
