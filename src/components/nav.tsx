import React, { FC } from 'react';
import styled from '@emotion/styled';
import Social from './social';
import DesktopMenu from './partials/desktop-menu';
import MobileMenu from './partials/mobile-menu';
import Link from 'next/link';
import { useRouter } from 'next/router';

const defaultNavItems = [
  {
    id: 1,
    text: 'Dev Projects',
    link: '/projects',
  },
  {
    id: 3,
    text: 'Notes',
    link: '/notes',
  },
  {
    id: 2,
    text: 'Art',
    link: '/art',
  },
  // {
  //   id: 4,
  //   text: 'Community',
  //   link: '/community',
  // },
];

const artNavItems = [
  {
    id: 1,
    text: 'Art',
    link: '/art',
  },
  {
    id: 2,
    text: 'Comics Templates',
    link: '/comics-templates',
  },
  {
    id: 3,
    text: 'Art Commissions',
    link: '/art-commissions',
  },
  {
    id: 4,
    text: 'Commissions Terms',
    link: '/commissions-terms',
  },
  {
    id: 5,
    text: 'NFTs',
    link: '/nfts',
  },
];

const Aside = styled.div`
  ul li {
    display: block;
  }
`;

const Nav: FC = () => {
  const router = useRouter();
  const isArtLink = artNavItems.some((navItem) => navItem.link === router.pathname);
  const navItems = isArtLink ? artNavItems : defaultNavItems;

  return (
    <>
      <nav className="flex items-center justify-start px-10 py-6">
        <Link href="/">
          <a>
            <h2 className="m-0 text-2xl font-semibold uppercase">Dee</h2>
          </a>
        </Link>
        <DesktopMenu navItems={navItems} />
        <MobileMenu navItems={navItems} />
      </nav>
      <Aside className="fixed bottom-0 hidden mb-6 md:block left-6">
        <Social />
      </Aside>
    </>
  );
};

export default Nav;
