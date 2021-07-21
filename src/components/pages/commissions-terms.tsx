import React, { FC } from 'react';
import styled from '@emotion/styled';

import { Section, SectionTitle } from '../partials/section';

const ColoredSection = styled(Section)``;

const EmphasizedSection = styled(Section)`
  @media (max-width: 768px) {
    background-image: url(ghost-wave.svg), url(ghost-wave-under.svg);
    background-position: 0% 100%, 0% 0%;
    background-size: 100%;
    background-repeat: no-repeat;
  }
`;

const TermsArticle = styled.article`
  li {
    font-size: 1.025rem;
  }

  li + li {
    margin-top: 0.875rem;
  }
`;

const CommissionsTerms: FC = () => {
  return (
    <>
      <ColoredSection className="py-16 bg-opacity-30 bg-custom-tea md:pt-14 mb-pb-20 md:flex justify-between items-start md:max-w-5xl md:mx-auto lg:px-12">
        <article className="md:-ml-6">
          <SectionTitle>1.</SectionTitle>

          <SectionTitle className="text-xl -mt-3 text-gray-800">General Terms</SectionTitle>
        </article>

        <TermsArticle className="md:max-w-lg md:w-4/6">
          <ul className="list-disc">
            <li>Prices are subject to change based on demand.</li>

            <li>I have the right to reject any order for any reason.</li>
          </ul>
        </TermsArticle>
      </ColoredSection>

      <Section className="md:flex justify-between items-start md:max-w-5xl md:mx-auto">
        <article className="md:-ml-6">
          <SectionTitle>2.</SectionTitle>

          <SectionTitle className="text-xl -mt-3 text-gray-800">Payment</SectionTitle>
        </article>

        <TermsArticle className="md:max-w-lg md:w-4/6">
          <ul className="list-disc">
            <li>
              Currency accepted is either USD or Naira and can be paid through my payment link or
              bank transfer.
            </li>

            <li>
              Commissions can be paid either 100% upfront or split 50% upfront and 50% after sketch
              approval.
            </li>

            <li>
              {`Don't send me any payment before I have agreed to give you a slot and requested you to
              send me the payment.`}
            </li>
          </ul>
        </TermsArticle>
      </Section>

      <ColoredSection className="py-16 bg-opacity-30 bg-custom-tea md:pt-14 mb-pb-20 md:flex justify-between items-start md:max-w-5xl md:mx-auto">
        <article className="md:-ml-6">
          <SectionTitle>3.</SectionTitle>

          <SectionTitle className="text-xl -mt-3 text-gray-800">
            Process &amp; Delivery
          </SectionTitle>
        </article>

        <TermsArticle className="md:max-w-lg md:w-4/6">
          <ul className="list-disc">
            <li>
              The time it takes to finish your commission varies 1 week - 3 months depending on
              factors such as health, the complexity of the commissioned piece, other work, and
              seasons.
            </li>

            <li>
              Once the piece is finished you will receive the full-resolution image along with a
              web-friendly size. Note that there is no physical product. Depending on where you
              live, we can arrange to print your artwork.
            </li>
          </ul>
        </TermsArticle>
      </ColoredSection>

      <Section className="md:flex justify-between items-start md:max-w-5xl md:mx-auto">
        <article className="md:-ml-6">
          <SectionTitle>4.</SectionTitle>

          <SectionTitle className="text-xl -mt-3 text-gray-800">Revisions</SectionTitle>
        </article>

        <TermsArticle className="md:max-w-lg md:w-4/6">
          <ul className="list-disc">
            <li>You get 3 rounds of changes on the commissioned piece included in the price.</li>

            <li>
              A fee will be added if you want something changed on the final drawing - unless a
              misunderstanding from my side has been made.
            </li>
            <li>
              If you wish for me to change something in the drawing you have previously approved, I
              will charge you a fee to change it. The amount of the extra charge depends on the
              change you want me to make and is usually based on an hourly wage.
            </li>
            <li>
              If your reference is unclear to start with, changes will come at an extra charge.
            </li>
          </ul>
        </TermsArticle>
      </Section>

      <ColoredSection className="py-16 bg-opacity-30 bg-custom-tea md:pt-14 mb-pb-20 md:flex justify-between items-start md:max-w-5xl md:mx-auto">
        <article className="md:-ml-6">
          <SectionTitle>5.</SectionTitle>

          <SectionTitle className="text-xl -mt-3 text-gray-800">Copyright &amp; Usage</SectionTitle>
        </article>

        <TermsArticle className="md:max-w-lg md:w-4/6">
          <ul className="list-disc">
            <li>
              <p>
                <strong>I, Adeola Adeyemo (the artist):</strong>
              </p>
              <ul className="list-disc px-6 py-3">
                <li>
                  I reserve the right to cancel and refund the order at any time for any reason.
                </li>
                <li>I retain all copyrights over the commissioned artwork.</li>
                <li>
                  I will NOT claim the intellectual property (IP) of the commissioned artwork.
                </li>
                <li>
                  I will NOT profit further from the commissioned artwork unless you (the customer)
                  break any of the terms.
                </li>
                <li>
                  I reserve the right to post the commissioned artwork online, in my portfolio as
                  well as in publications such as art books. This is also subject to a delay
                  provided by you (the customer)
                </li>
              </ul>
            </li>

            <li>
              <p>
                <strong>You (the customer/commissioner):</strong>
              </p>
              <ul className="list-disc px-6 py-3">
                <li>You may upload the commissioned artwork on any website and social channels.</li>
                <li>
                  You may NOT make profits from the commissioned piece (reselling, redistributing,
                  uploading to POD-services, make prints, etc.)
                </li>
                <li>
                  {`You may NOT alter the commissioned artwork without my (the artist's) consent`}.
                </li>
                <li>
                  You MAY be allowed to sell the artwork if it is a part of an Adoptable. Please
                  discuss this with me prior to paying for the artwork.
                </li>
                <li>You retain the rights to the intellectual property (IP).</li>
                <li>You may NOT use the commissioned artwork for commercial purposes.</li>
              </ul>
            </li>

            <li>
              <p>
                <strong>The following is considered as copyright infringement:</strong>
              </p>

              <ul className="list-disc px-6 py-3">
                <li>
                  Reproducing/using the copyrighted artwork commercially - means making money off it
                  in any way not excluded from these terms.
                </li>
                <li>Claiming the artwork as your own</li>
                <li>Altering the artwork without my consent</li>
              </ul>
            </li>

            <li>
              <strong>In some cases, the commercial rights to the image may be purchased.</strong>
            </li>
          </ul>
        </TermsArticle>
      </ColoredSection>

      <Section className="md:flex justify-between items-start md:max-w-5xl md:mx-auto">
        <article className="md:-ml-6">
          <SectionTitle>6.</SectionTitle>

          <SectionTitle className="text-xl -mt-3 text-gray-800">
            Cancellation &amp; Refund Policy
          </SectionTitle>
        </article>

        <TermsArticle className="md:max-w-lg md:w-4/6">
          <ul className="list-disc">
            <li>The buyer is not allowed a refund once I started working on the commission.</li>

            <li>
              If for any reason I am unable to start your commission you will receive a full refund.
            </li>

            <li>If you cancel your order before I started it, you can get a full refund.</li>

            <li>If you are getting a refund, I will transfer the money back to you myself.</li>
          </ul>
        </TermsArticle>
      </Section>

      <EmphasizedSection className="my-8 md:max-w-5xl md:mx-auto text-white bg-custom-purple py-32 md:py-20">
        <SectionTitle className="text-2xl text-white">What do you get?</SectionTitle>

        <TermsArticle>
          <ul className="list-disc text-white">
            <li>
              Drafts/mockups that you must decide which one I should continue with (depending on the
              complexity of the commission there might be fewer or more drafts)
            </li>

            <li>Sketch and/or final sketches that you must accept before I continue the work</li>

            <li>
              Insight and involvement in color plan (depending on the complexity of the commissioned
              piece)
            </li>

            <li>
              Full-resolution file (at 300 DPI) of final drawing and a smaller version for internet
              upload. Final file formats are usually PNG.
            </li>
          </ul>
        </TermsArticle>
      </EmphasizedSection>
    </>
  );
};

export default CommissionsTerms;
