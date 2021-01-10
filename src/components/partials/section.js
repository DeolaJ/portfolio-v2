import React from 'react';
import PropTypes from 'prop-types';

export const Section = ({ children, className }) => (
  <section className={`px-6 sm:px-10 md:px-24 lg:px-28 py-10 ${className}`}>{children}</section>
);

Section.defaultProps = {
  className: '',
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export const SectionTitle = ({ children, className }) => (
  <h2
    className={`mb-3.5 text-gray-600 tracking-wide uppercase font-semibold text-base ${className}`}
  >
    {children}
  </h2>
);

SectionTitle.defaultProps = {
  className: '',
};

SectionTitle.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export const SectionTitleSub = ({ children, className }) => (
  <h4
    className={`mb-7 text-gray-800 text-2xl sm:md:text-3xl md:text-4xl tracking-wide font-semibold ${className}`}
  >
    {children}
  </h4>
);

SectionTitleSub.defaultProps = {
  className: '',
};

SectionTitleSub.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
