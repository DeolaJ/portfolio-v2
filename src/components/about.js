import React from 'react';
import { Section, SectionTitle, SectionTitleSub } from './partials/section';
import StackPills from './partials/stack-pills';

const About = () => {
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

      <Section className="text-center">
        <SectionTitle>Skills</SectionTitle>
        <SectionTitleSub>Tech Stack.</SectionTitleSub>
        <article className="mb-8">
          <ul className="flex flex-wrap items-center justify-center">
            <StackPills>HTML</StackPills>
            <StackPills>(S)CSS</StackPills>
            <StackPills>JavaScript</StackPills>
            <StackPills>JQuery</StackPills>
            <StackPills>React JS</StackPills>
            <StackPills>Redux</StackPills>
            <StackPills>Angular 1</StackPills>
            <StackPills>Firebase</StackPills>
            <StackPills>Netlify</StackPills>
            <StackPills>Emotion</StackPills>
            <StackPills>Styled Components</StackPills>
            <StackPills>Bootstrap</StackPills>
            <StackPills>Semantic UI</StackPills>
            <StackPills>Tailwind</StackPills>
            <StackPills>Gatsby JS</StackPills>
            <StackPills>Gulp</StackPills>
            <StackPills>ESLint</StackPills>
            <StackPills>Babel</StackPills>
            <StackPills>Webpack</StackPills>
            <StackPills>Next JS</StackPills>
            <StackPills>Jest</StackPills>
            <StackPills>Enzyme</StackPills>
          </ul>
        </article>
      </Section>
    </>
  );
};

export default About;
