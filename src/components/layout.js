import React from 'react';
import PropTypes from 'prop-types';
import Footer from './footer';
import Nav from './nav';
import Contact from './contact';

const Layout = ({ children }) => (
  <>
    <main>
      <>
        <Nav />
        {children}
        <Contact />
      </>
    </main>
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
