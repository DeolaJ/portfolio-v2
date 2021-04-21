import React, { FC, PropsWithChildren } from 'react';
import PropTypes from 'prop-types';
import Button from './button';
import Link from 'next/link';

type SectionProps = {
  className?: string;
};

interface SlicedListSectionProps extends SectionProps {
  listLink?: string;
  listType: string;
  complete?: boolean;
  internal?: boolean;
}

export const Section: FC<PropsWithChildren<SectionProps>> = ({ children, className }) => (
  <section className={`px-6 sm:px-10 md:px-24 lg:px-28 py-12 ${className}`}>{children}</section>
);

Section.defaultProps = {
  className: '',
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export const SectionTitle: FC<PropsWithChildren<SectionProps>> = ({ children, className }) => (
  <h2
    className={`mb-3.5 text-gray-600 tracking-wide uppercase font-semibold text-base ${className}`}>
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

export const SectionTitleSub: FC<PropsWithChildren<SectionProps>> = ({ children, className }) => (
  <h4
    className={`mb-7 text-gray-800 text-2xl sm:md:text-3xl md:text-4xl tracking-wide font-semibold ${className}`}>
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

export const SlicedListSection: FC<PropsWithChildren<SlicedListSectionProps>> = ({
  children,
  className,
  listType,
  listLink,
  complete,
}) => (
  <section className={`px-6 sm:px-10 md:px-24 lg:px-28 py-10 ${className}`}>
    <>{children}</>

    {complete && (
      <Link href={listLink}>
        <a>
          <Button text={listType} className="flex mt-4 mb-12 ml-auto" sub />
        </a>
      </Link>
    )}
  </section>
);

SlicedListSection.defaultProps = {
  className: '',
  complete: false,
  listLink: '',
  internal: false,
};

SlicedListSection.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  listLink: PropTypes.string,
  listType: PropTypes.string.isRequired,
  complete: PropTypes.bool,
  internal: PropTypes.bool,
};
