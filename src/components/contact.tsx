import React, { FC } from 'react';
import Image from 'next/image';
import styled from '@emotion/styled';

import { Section, SectionTitle, SectionTitleSub } from './partials/section';
import Button from './partials/button';
import { ImageWrapper } from './styled';

const ContactSectionWrapper = styled(Section)`
  background-image: url('/ghost-wave.svg'), url('/ghost-wave-under.svg');
  background-position: 0% 100%, 0% 0%;
  background-size: 100%;
  background-repeat: no-repeat;
`;

const Contact: FC = () => {
  return (
    <ContactSectionWrapper className="pt-40 text-center pb-28 md:pb-28 md:pt-12 bg-opacity-10 section bg-custom-orange contact-container">
      <SectionTitle>Contact</SectionTitle>
      <SectionTitleSub className="text-custom-purple">
        Are you ready to work with me?
      </SectionTitleSub>
      <article className="py-6 my-8 md:grid md:grid-cols-2 gap-x-8">
        <ImageWrapper className="self-center w-3/4 mx-auto mb-4 md:mb-0 md:mx-0 md:w-full">
          <Image
            src="https://res.cloudinary.com/dzpntisxj/image/upload/v1618660376/digital-art/IMG_4590_mo3fje.png"
            width={528}
            height={528}
            layout="intrinsic"
            alt="hero illustration"
          />
        </ImageWrapper>
        <article className="self-center text-center md:text-left">
          <p className="mb-3 text-base md:leading-7 md:text-lg text-custom-purple">
            {"I'm "}
            open for new opportunities and requests.
            <br />
          </p>
          <p className="mb-5 text-base md:leading-7 md:text-lg text-custom-purple">
            If you have a question, or just want to say hi,
            {" I'll "}
            try my best to get back to you.
          </p>
          <Button link="mailto:adeola.adeyemoj@gmail.com" text="Get in touch" />
        </article>
      </article>
    </ContactSectionWrapper>
  );
};

export default Contact;
