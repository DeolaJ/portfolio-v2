import React, { FC } from 'react';
import styled from 'styled-components';
import Social from './social';
import DesktopMenu from './partials/desktop-menu';
import MobileMenu from './partials/mobile-menu';
import Link from 'next/link';

const navItems = [
  {
    id: 1,
    text: 'Dev Projects',
    link: '/projects',
  },
  // {
  //   id: 3,
  //   text: 'Notes',
  //   link: '/notes',
  // },
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

const Aside = styled.div`

  &::after {
    content: '',
    display: block;
    width: 1px;
    height: 40px;
    background: black;
    margin: 0 auto;
  }

  ul li {
    display: block;
  }
`;

const Nav: FC = () => {
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
