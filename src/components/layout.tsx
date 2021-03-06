import React, { FC, PropsWithChildren } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import Footer from './footer';
import Nav from './nav';
import Contact from './contact';
import Global from './global';

type LayoutProps = {
  className?: string;
};

const Layout: FC<PropsWithChildren<LayoutProps>> = ({ className, children }) => (
  <>
    <Global />
    <motion.main className={className} exit={{ opacity: 0 }} initial="initial" animate="animate">
      <>
        <Nav />
        {children}
        <Contact />
      </>
    </motion.main>
    <Footer />
  </>
);

Layout.defaultProps = {
  className: '',
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Layout;
