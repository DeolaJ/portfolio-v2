import { FC } from 'react';
import styled from '@emotion/styled';

import StackPills from '../partials/stack-pills';
import Header from '../header';
import { Section, SectionTitle, SectionTitleSub } from '../partials/section';

const AboutTextWrapper = styled(Section)`
  background-image: url(ghost-wave.svg), url(ghost-wave-under.svg);
  background-position: 0% 100%, 0% 0%;
  background-size: 100%;
  background-repeat: no-repeat;

  @media (min-width: 768px) {
    background-position: 0% 121%, 0% -29%;
    background-size: 117%;
  }
`;

const BirthdayParty: FC = () => {
  const attendees = [
    'Tope (Teetop)',
    'Oyindamola Sulaimon',
    'Oyindamola Fatungase',
    'Daniyelle',
    'Omolara',
    'Tobi (Lala)',
    'Olufolarin',
    'Lateef',
    'Mary && Ayobami',
    'Adedayo',
    'Ibrahim',
    'Betty',
    'Mariam',
    'Moyinoluwa',
    'Victoria',
    'Adesayo && Gbogboade',
    'Etomi',
    'Abayomi',
    'William',
    'Hannah',
    'Oluwaseun',
    'Oluwole',
    'Zainab Lawal',
    'Zainab Sowemimo',
    'Onyinye Mbieli',
    'Precious Chilaka',
    'Bassey',
    'Ebuka Moh',
    'Rachel',
    'Ismail Shofoluwe',
    'Adeoye'
  ];

  return (
    <section>
      <Header
        title="12PM - 7PM, 22nd Jan. 2022"
        subtitle="Birthday Parry"
        roles="Venue: 32 Adeyeye Street, Millennium Estate, Gbagada, Lagos"
        imageLink="https://res.cloudinary.com/dzpntisxj/image/upload/v1637828679/digital-art/93271852-FBA7-49A0-A5DF-44DC966D7AAB_ndtarh.png"
        imgWidth={350 * 1.25}
        imgHeight={420 * 1.25}
      />

      <AboutTextWrapper className="py-20 md:py-32 lg:py-52 text-center bg-opacity-30 bg-custom-tea -mt-12 md:-mt-20">
        <SectionTitle>About</SectionTitle>
        <SectionTitleSub>A little more details</SectionTitleSub>
        <article className="my-4">
          <p className="text-base">Majorly music, networking, fun games, food and drinks.</p>
          <p className="text-base">
            Feel free to bring games (board, cards, if you have), drinks, snacks etc.. More is
            always welcome. Reach out if you have questions about this
          </p>
        </article>
      </AboutTextWrapper>

      <Section className="text-center">
        <SectionTitle>Password</SectionTitle>
        <SectionTitleSub>Millenium Estate Gate Password</SectionTitleSub>
        <article className="my-4">
          <p className="text-base">
            The password is ZD32 HASH. To reach me, call +2347062972181 (main) or +2348123857352
          </p>
        </article>
      </Section>

      <Section className="text-center">
        <SectionTitle>Attendees</SectionTitle>
        <SectionTitleSub>
          List of people that will be around. So attendees that know each other can move together if
          possible
        </SectionTitleSub>
        <article className="my-8">
          <ul className="flex flex-wrap items-center justify-center">
            {attendees.map((stack) => (
              <StackPills key={stack}>{stack}</StackPills>
            ))}
          </ul>
        </article>
      </Section>
    </section>
  );
};

export default BirthdayParty;
