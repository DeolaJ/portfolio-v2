import React, { FC } from 'react';
import Image from 'next/image';
import styled from '@emotion/styled';

import { Section, SectionTitle, SectionTitleSub } from '../partials/section';
import StackPills from '../partials/stack-pills';
import { ImageWrapper } from '../styled';

const AboutTextWrapper = styled(Section)`
  background-image: url(ghost-wave.svg), url(ghost-wave-under.svg);
  background-position: 0% 100%, 0% 0%;
  background-size: 100%;
  background-repeat: no-repeat;
`;

const AboutSection: FC = () => {
  const techStack = [
    'HTML',
    '(S)CSS',
    'JavaScript (ES6)',
    'TypeScript',
    'JQuery',
    'React JS',
    'Redux',
    'Angular 1',
    'Firebase',
    'Netlify',
    'Emotion',
    'Styled-Components',
    'Bootstrap',
    'Semantic UI',
    'Tailwind CSS',
    'Next JS',
    'Node JS',
    'Gulp',
    'Git',
    'ESLint',
    'Babel',
    'Webpack',
    'Jest',
    'React Testing Library',
    'Enzyme',
    'Cypress',
    'Contentful',
    'Sanity',
  ];

  return (
    <>
      {/* <Section>
        <SectionTitle>Background</SectionTitle>
        <SectionTitleSub>Work</SectionTitleSub>
        <article className="mb-8">
          <ul className="flex items-center justify-center">
            <li>
              <p>Jan. 2017</p>
              <div>
                <p>Hotels.ng</p>
                <h3>Front end Developer (Intern)</h3>
                <p>Worked Remotely</p>
              </div>
            </li>

            <li>
              <p>April 2017</p>
            </li>

            <li>
              <p>November 2018</p>
              <div>
                <p>Formplus</p>
                <h3>Front end Developer</h3>
                <p>I joined</p>
              </div>
            </li>

            <li>
              <p>June 2019</p>
              <div>
                <p>Formplus</p>
                <h3>Lead Front end Developer</h3>
                <p>I am lead</p>
              </div>
            </li>

            <li>
              <p>Today</p>
            </li>
          </ul>
        </article>
      </Section> */}

      <AboutTextWrapper className="py-24 text-center bg-opacity-30 bg-custom-tea md:pt-14 mb-pb-20">
        <SectionTitle>About</SectionTitle>
        <SectionTitleSub>My Story.</SectionTitleSub>
        <article className="py-6 my-8 md:grid md:grid-cols-2 gap-x-8">
          <ImageWrapper className="self-center w-3/4 mx-auto mb-4 md:mb-0 md:mx-0 md:w-full">
            <Image
              src="https://res.cloudinary.com/dzpntisxj/image/upload/v1618660362/digital-art/IMG_4589_g6a1tx.png"
              width={500}
              height={500}
              layout="intrinsic"
              alt="about illustration"
            />
          </ImageWrapper>
          <article className="self-center text-left md:-mt-6 text-custom-purple">
            <p className="mb-4">
              I am a passionate Frontend Engineer that loves solving problems with code.
            </p>
            <p className="mb-4">
              My journey with Software development started in 2015, in my second year in the
              University of Lagos. A group of friends and I wanted to build a social e-commerce
              platform. It did not work out as planned but the interest was sparked, and I had
              picked up relevant skills like HTML, CSS and JavaScript during that period
            </p>
            <p className="mb-4">
              Ever since, I have had the opportunity to work on interesting projects with focus on
              adding value. I kept improving on the fundamental skills and have picked up valuable
              experience along the way. After graduating from the University, I joined Formplus.
            </p>
            <p>Currently I work as a Senior Frontend Engineer at Korapay</p>
          </article>
        </article>
      </AboutTextWrapper>

      <Section className="text-center">
        <SectionTitle>Skills</SectionTitle>
        <SectionTitleSub>Tech Stack.</SectionTitleSub>
        <p>I have experience working with the following technologies</p>
        <article className="my-8">
          <ul className="flex flex-wrap items-center justify-center">
            {techStack.map((stack) => (
              <StackPills key={stack}>{stack}</StackPills>
            ))}
          </ul>
        </article>
      </Section>
    </>
  );
};

export default AboutSection;
