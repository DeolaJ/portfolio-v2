import React, { FC } from 'react';
import Social from './social';

const Footer: FC = () => (
  <footer className="w-full py-12 text-center">
    <article className="block md:hidden">
      <Social />
    </article>
    <>©{new Date().getFullYear()} Adeola J. Adeyemo</>
  </footer>
);

export default Footer;
