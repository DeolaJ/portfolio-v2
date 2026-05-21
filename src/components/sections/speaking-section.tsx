import React, { FC } from 'react';
import Image from 'next/image';
import styled from '@emotion/styled';

import { Section, SectionTitle, SectionTitleSub } from '../partials/section';

type SpeakingLink = {
  label: string;
  href: string;
};

type SpeakingEngagement = {
  id: string;
  type: 'Podcast' | 'Panel';
  title: string;
  description: string;
  event: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  links?: SpeakingLink[];
};

const engagements: SpeakingEngagement[] = [
  {
    id: 'everyday-money',
    type: 'Panel',
    title: 'Dissecting The Impact of Artificial Intelligence on Business and Career',
    description:
      "Panelist at Futurr's Everyday Money 2025 event, exploring how AI is reshaping career paths and business strategy.",
    event: 'Futurr — Everyday Money 2025',
    image: '/images/everydaymoney.jpeg',
    imageWidth: 640,
    imageHeight: 400,
  },
  {
    id: 'vitalswap-hackathon',
    type: 'Panel',
    title: 'Migrating as a Tech Professional & Building a Lasting Career in Tech',
    description:
      'Joined a panel at the VitalSwap Hackathon 2025 to discuss what it takes to migrate as a tech professional and build a sustainable career in the industry.',
    event: 'VitalSwap Hackathon 2025',
    image: '/images/hackathon.jpeg',
    imageWidth: 640,
    imageHeight: 400,
  },
  {
    id: 'epilot-podcast',
    type: 'Podcast',
    title: 'The Reality of Remote Work in Product Engineering',
    description:
      'Joined Sara Vieira on the epilot Product Engineer Podcast to talk about working remotely from the UK for a Cologne-based company — covering focus, collaboration, and work-life balance.',
    event: 'epilot Product Engineer Podcast',
    image: '/images/podcast.jpeg',
    imageWidth: 640,
    imageHeight: 400,
    links: [
      { label: 'Watch on YouTube', href: 'https://www.youtube.com/watch?v=o02J6eSKHTo' },
      {
        label: 'Listen on Spotify',
        href: 'https://open.spotify.com/episode/5i4CR4GWUgXiErSK8qyz6h?si=0df24c4bbf4c4af2&nd=1&dlsi=e689fe77698b4a6f',
      },
    ],
  },
];

const SpeakingSectionWrapper = styled(Section)`
  background-repeat: no-repeat;
  background-position: right center;
  background-image: url(/pattern-three-sm.png);
  background-size: 25%;

  @media (min-width: 768px) {
    background-size: 10%;
  }
`;

const TypeBadge = styled.span`
  font-size: 0.7rem;
  letter-spacing: 0.08em;
`;

const SpeakingSection: FC = () => (
  <SpeakingSectionWrapper>
    <SectionTitle>Speaking</SectionTitle>
    <SectionTitleSub>Talks & Podcasts.</SectionTitleSub>

    <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {engagements.map((item) => (
        <li
          key={item.id}
          className="rounded-md bg-custom-lightGhost shadow-card overflow-hidden flex flex-col"
        >
          <div className="w-full overflow-hidden">
            <Image
              src={item.image}
              alt={item.title}
              width={item.imageWidth}
              height={item.imageHeight}
              className="object-cover w-full"
              layout="responsive"
            />
          </div>
          <div className="p-5 flex flex-col flex-1">
            <TypeBadge className="self-start mb-2 px-2 py-0.5 rounded-full bg-custom-tea text-custom-purple font-semibold uppercase tracking-widest">
              {item.type}
            </TypeBadge>
            <h4 className="mb-2 text-sm font-semibold text-gray-800 leading-snug sm:text-base">
              {item.title}
            </h4>
            <p className="mb-3 text-xs leading-relaxed text-gray-600">{item.description}</p>
            <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">
              {item.event}
            </p>
            {item.links && item.links.length > 0 && (
              <div className="flex flex-wrap gap-3 mt-4 pt-4 border-t border-gray-200">
                {item.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-custom-purple underline hover:opacity-70 transition-opacity"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </li>
      ))}
    </ul>
  </SpeakingSectionWrapper>
);

export default SpeakingSection;
