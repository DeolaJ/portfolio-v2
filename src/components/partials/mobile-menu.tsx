import React, { useState, FC } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MobileMenuList from './mobile-menu-list';

type NavItemProps = {
  id: number;
  text: string;
  link: string;
};

type NavMenuProps = {
  navItems: Array<NavItemProps>;
};

const MobileButton = styled.button``;

const MobileMenuWrapper = styled.div`
  z-index: 3;
  width: calc(100vw - 5rem);
  transform: translateY(-100%);
  transition: transform 400ms cubic-bezier(0.39, 0.58, 0.57, 1);

  &.true {
    transform: translateY(0);
  }

  hr {
    border-top-width: 0.2px;
  }
`;

const MobileMenu: FC<NavMenuProps> = ({ navItems }) => {
  const [open, setOpen] = useState(false);
  const toggleOpen = (e) => {
    e.stopPropagation();
    setOpen(!open);
  };

  return (
    <article className="relative flex-grow block pt-3 text-right md:hidden">
      <MobileButton
        className="inline-block w-6 bg-transparent border-none outline-none cursor-pointer md:hidden focus:outline-none"
        onClick={toggleOpen}>
        <span className="block w-full mb-1.5 border-t-2 border-solid leading-1 border-gray-700 rounded-lg" />
        <span className="block w-full mb-1.5 border-t-2 border-solid leading-1 border-gray-700 rounded-lg" />
        <span className="block w-full mb-1.5 border-t-2 border-solid leading-1 border-gray-700 rounded-lg" />
      </MobileButton>

      {open && (
        <MobileMenuWrapper
          className={`mobile-menu absolute right-0 top-12 w-screen text-white text-center bg-primary-darkViolet rounded-lg bg-white md:hidden ${open}`}>
          <MobileMenuList navItems={navItems} />
        </MobileMenuWrapper>
      )}
    </article>
  );
};

MobileMenu.propTypes = {
  navItems: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default MobileMenu;
