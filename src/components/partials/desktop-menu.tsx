import React, { FC } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

type NavItemProps = {
  id: number;
  text: string;
  link: string;
};

type NavMenuProps = {
  navItems: Array<NavItemProps>;
};

const DesktopMenu: FC<NavMenuProps> = ({ navItems }) => (
  <ul className="items-center justify-end flex-grow hidden p-0 m-0 mb-2 ml-8 md:flex">
    {navItems.map((navItem) => (
      <li className="inline-block p-2 mx-2 my-0" key={navItem.id}>
        <Link href={navItem.link}>
          <a className="p-1 mr-2 text-sm font-bold no-underline cursor-pointer hover:underline">
            <span>{navItem.text}</span>
          </a>
        </Link>
      </li>
    ))}
  </ul>
);

DesktopMenu.propTypes = {
  navItems: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default DesktopMenu;
