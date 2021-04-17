import React, { FC } from 'react';
import Image from 'next/image';
import { Section, SectionTitle, SectionTitleSub } from './partials/section';
import Button from './partials/button';

const Contact: FC = () => {
  return (
    <Section className="text-center section contact-container">
      <div className="w-3/4 p-5 mx-auto mb-4 sm:w-2/3">
        <Image
          src="https://res.cloudinary.com/dzpntisxj/image/upload/v1618660376/digital-art/IMG_4590_mo3fje.png"
          width={528}
          height={528}
          layout="intrinsic"
          alt="hero illustration"
        />
      </div>
      <SectionTitle>Contact</SectionTitle>
      <SectionTitleSub>Are you ready to work with me?</SectionTitleSub>
      <p className="mb-4">
        {"I'm "}
        open for new opportunities and requests.
        <br />
        Also if you have a question , or just want to say hi,
        {" I'll "}
        try my best to get back to you.
      </p>
      <Button link="mailto:adeola.adeyemoj@gmail.com" text="Get in touch" />
    </Section>
  );
};

export default Contact;
