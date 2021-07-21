import React, { FC } from 'react';
import styled from '@emotion/styled';

import { Section, SectionTitle, SectionTitleSub } from '../partials/section';

const EmphasizedSection = styled(Section)`
  @media (max-width: 768px) {
    background-image: url(ghost-wave.svg), url(ghost-wave-under.svg);
    background-position: 0% 100%, 0% 0%;
    background-size: 100%;
    background-repeat: no-repeat;
  }
`;

const TermsArticle = styled.article`
  padding: 0 1rem;

  li {
    font-size: 1.025rem;
  }

  li + li {
    margin-top: 0.875rem;
  }
`;

const CommissionList: FC = () => {
  return (
    <>
      <Section className="pb-10 md:max-w-5xl md:mx-auto">
        <SectionTitle>Services</SectionTitle>

        <SectionTitleSub>Coming Soon</SectionTitleSub>
      </Section>

      <EmphasizedSection className="my-8 md:max-w-5xl md:mx-auto text-white bg-custom-purple py-32 md:py-20">
        <SectionTitle className="text-3xl text-white text-center">Do &amp; Donts</SectionTitle>

        <article className="md:flex items-start justify-around">
          <TermsArticle>
            <SectionTitle className="text-lg text-white">Dos</SectionTitle>
            <ul className="list-decimal text-white mb-6 list-inside">
              <li>Simple Stylized Portraits</li>

              <li>Sketches &amp; Lineart</li>

              <li>Fanart</li>

              <li>Stylized Characters</li>

              <li>Comics</li>
            </ul>
          </TermsArticle>

          <TermsArticle>
            <SectionTitle className="text-lg text-white">Donts</SectionTitle>
            <ul className="list-decimal text-white mb-6 list-inside">
              <li>Gore</li>

              <li>NSFW</li>

              <li>Realism</li>

              <li>Complex Backgrounds</li>

              <li>Imitate other artworks</li>
            </ul>
          </TermsArticle>
        </article>
      </EmphasizedSection>
    </>
  );
};

export default CommissionList;
