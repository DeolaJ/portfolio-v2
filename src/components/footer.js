import React from 'react';
import Social from './social';

const Footer = () => (
  <footer className="w-full py-8 text-center">
    <arcticle className="block md:hidden">
      <Social />
    </arcticle>
    <>
      ©{new Date().getFullYear()}
      {' '}
      Adeola J. Adeyemo
    </>
  </footer>
);

export default Footer;
