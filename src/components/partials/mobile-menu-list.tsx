import React, { FC } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'next/link';

type NavItemProps = {
  id: number;
  text: string;
  link: string;
};

type MobileMenuListProps = {
  navItems: Array<NavItemProps>;
};

const MobileMenuListWrapper = styled.ul`
  box-shadow: 0 0 11px 3px rgba(0, 0, 0, 0.1);
`;

const MobileMenuList: FC<MobileMenuListProps> = ({ navItems }) => {
  return (
    <MobileMenuListWrapper className="p-6 m-0 bg-white rounded-lg">
      {navItems.map((navItem) => (
        <li className="block p-2 mx-0 my-2 text-gray-800" key={navItem.id}>
          <Link href={navItem.link}>
            <a className="p-0 text-base font-bold no-underline cursor-pointer hover:underline">
              <span>{navItem.text}</span>
            </a>
          </Link>
        </li>
      ))}
    </MobileMenuListWrapper>
  );
};

MobileMenuList.propTypes = {
  navItems: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default MobileMenuList;
