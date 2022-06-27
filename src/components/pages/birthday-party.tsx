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
    'Mary && Ayobami',
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
    'Oluwole && Amaka',
    'Zainab Lawal',
    'Zainab Sowemimo',
    'Onyinye Mbieli',
    'Yusuf',
    'Ebuka Moh',
    'Rachel',
    'Ismail Shofoluwe',
    'Adeoye',
  ];

  return (
    <section>
      <Header
        title="12PM - 7PM, 22nd Jan. 2022"
        subtitle="Thank you (Birthday Parry)"
        roles="Venue: 32 Adeyeye Street, Millennium Estate, Gbagada, Lagos (Opposite 25A)"
        imageLink="https://res.cloudinary.com/dzpntisxj/image/upload/v1637828679/digital-art/93271852-FBA7-49A0-A5DF-44DC966D7AAB_ndtarh.png"
        imgWidth={350 * 1.25}
        imgHeight={420 * 1.25}
      />

      <AboutTextWrapper className="py-20 md:py-32 lg:py-52 text-center bg-opacity-30 bg-custom-tea -mt-12 md:-mt-20">
        <SectionTitle>Appreciation</SectionTitle>
        <SectionTitleSub>Thank you</SectionTitleSub>
        <article className="my-4">
          <p className="text-base">
            Thank you for attending my birthday party. You made my day and I truly hope it was fun
            for you
          </p>
          <p className="text-base">
            If you connected with anyone at the party, and want to get their contact details, feel
            free to reach out to me
          </p>
        </article>
      </AboutTextWrapper>

      <Section className="text-center">
        <SectionTitle>Attendees</SectionTitle>
        <SectionTitleSub>List of attendees that came around</SectionTitleSub>
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
