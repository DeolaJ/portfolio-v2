import React from 'react';
import styled from 'styled-components';
import Social from './social';

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

const Nav = () => {
  return (
    <>
      <nav className="flex items-center justify-start px-10 py-6">
        <h2 className="m-0 text-2xl font-semibold uppercase">Dee</h2>
      </nav>
      <Aside className="fixed bottom-0 hidden mb-6 md:block left-6">
        <Social />
      </Aside>
    </>
  );
};

export default Nav;
