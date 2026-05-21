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

const techStack = [
  'HTML',
  '(S)CSS',
  'JavaScript (ES6+)',
  'TypeScript',
  'React JS',
  'Next JS',
  'Redux',
  'React Query',
  'Tailwind CSS',
  'Chakra UI',
  'Emotion',
  'Styled-Components',
  'Storybook',
  'Web Components',
  'Shadow DOM',
  'Node JS',
  'Vite',
  'Webpack',
  'Vitest',
  'Jest',
  'React Testing Library',
  'Playwright',
  'Firebase',
  'Supabase',
  'PostgreSQL',
  'AWS (Lambda, DynamoDB, CloudFront)',
  'Contentful',
  'Sanity',
  'LaunchDarkly',
  'Datadog',
  'Google Analytics',
  'Google Search Console',
  'ESLint',
  'Git',
  'Claude',
  'OpenAI',
  'Gemini',
];

const techStackHalf = Math.ceil(techStack.length / 2);
const techStackRowA = techStack.slice(0, techStackHalf);
const techStackRowB = techStack.slice(techStackHalf);

const TechStackMarquee: FC = () => (
  <div className="marquee" aria-label="Technologies I work with">
    <div className="marquee-track">
      <ul className="marquee-row">
        {techStackRowA.map((stack) => (
          <StackPills key={`a-${stack}`}>{stack}</StackPills>
        ))}
      </ul>
      <ul className="marquee-row" aria-hidden="true">
        {techStackRowA.map((stack) => (
          <StackPills key={`a-dup-${stack}`}>{stack}</StackPills>
        ))}
      </ul>
    </div>
    <div className="marquee-track marquee-track-reverse">
      <ul className="marquee-row">
        {techStackRowB.map((stack) => (
          <StackPills key={`b-${stack}`}>{stack}</StackPills>
        ))}
      </ul>
      <ul className="marquee-row" aria-hidden="true">
        {techStackRowB.map((stack) => (
          <StackPills key={`b-dup-${stack}`}>{stack}</StackPills>
        ))}
      </ul>
    </div>
  </div>
);

const AboutSection: FC = () => {
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
              {`Senior Product Engineer with 8+ years building high-impact products end to end. I care deeply about crafting
              experiences that genuinely solve real problems — focused on creativity, user experience, accessibility, testing,
              and performance.`}
            </p>
            <p className="mb-4">
              {`My journey started in 2015, where a side project sparked my interest in web
              development. Since then, I've had the opportunity to work across B2B SaaS in data collection (Formplus),
              fintech (Kora), recruiting (Talentdrop), and energy transition (epilot) — with leadership experience throughout.`}
            </p>
            <p className="mb-4">
              {`Currently, I work as a Senior Product Engineer at epilot, where I've spent the last two years as the technical
              owner of a design system, an embeddable SDK, and a validation engine — each a revenue-driving feature for a
              360° platform used by major European energy companies. My best work happens at startups and scaleups where I can
              be creative, move with autonomy, and see the direct impact of what I build.`}
            </p>
            <p className="mb-4">
              {`I was awarded the UK Global Talent award in 2023, and I use AI tools daily to accelerate how I think and build. I contribute to the community through technical
              writing. In my free time, I paint digitally 🎨 and keep learning
              about the tech industry and test out new tools.`}
            </p>
          </article>
        </article>
      </AboutTextWrapper>

      <Section className="text-center">
        <SectionTitle>Skills</SectionTitle>
        <SectionTitleSub>Tech Stack.</SectionTitleSub>
        <p>I have experience working with the following technologies</p>
        <article className="my-8">
          <TechStackMarquee />
        </article>
      </Section>
    </>
  );
};

export default AboutSection;
