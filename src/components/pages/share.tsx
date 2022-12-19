import { FC } from 'react';
import Link from 'next/link';

import { Section, SectionTitle, SectionTitleSub } from '../partials/section';
import Button from '../partials/button';

const SharePage: FC = () => {
  return (
    <Section className="pb-10 md:max-w-2xl md:mx-auto center mt-4 md:mt-10 mb-16 md:mb-32">
      <SectionTitle>Links</SectionTitle>

      <SectionTitleSub>Check out my links below</SectionTitleSub>

      <article className="flex items-start justify-around flex-col gap-3">
        <Link href="/" target="_blank">
          <a className="w-full">
            <Button text="Portfolio (Dev) 👨🏾‍💻" className="w-full text-xs" />
          </a>
        </Link>
        <Link href="/notes" target="_blank">
          <a className="w-full">
            <Button text="Online Notes 📝" className="w-full text-xs" />
          </a>
        </Link>
        <Link href="/art" target="_blank">
          <a className="w-full">
            <Button text="Portfolio (Art) 👨🏾‍🎨" className="w-full text-xs" />
          </a>
        </Link>
        <Link href="/nfts" target="_blank">
          <a className="w-full">
            <Button text="Porfolio (NFTs) 🎨" className="w-full text-xs" />
          </a>
        </Link>
        <a
          href="https://medium.com/@DeolaJ"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full">
          <Button text="Medium (Blog)" className="w-full text-xs" />
        </a>
        <a
          href="https://ballooncomics.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full">
          <Button text="Balloon Comics 😶‍🌫️" className="w-full text-xs" />
        </a>
      </article>
    </Section>
  );
};

export default SharePage;
