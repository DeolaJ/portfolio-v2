import React, { FC, PropsWithChildren, CSSProperties } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';

import Button from './button';
import { fadeInUp } from '../../animation';

type SectionProps = {
  className?: string;
  style?: CSSProperties;
};

interface SlicedListSectionProps extends SectionProps {
  listLink?: string;
  listType: string;
  complete?: boolean;
  internal?: boolean;
}

export const Section: FC<PropsWithChildren<SectionProps>> = ({ children, className, style }) => (
  <motion.section
    variants={fadeInUp}
    style={style}
    className={twMerge(`px-6 sm:px-10 md:px-24 lg:px-28 py-12 ${className}`)}>
    {children}
  </motion.section>
);

Section.defaultProps = {
  className: '',
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export const SectionTitle: FC<PropsWithChildren<SectionProps>> = ({ children, className }) => (
  <motion.h2
    variants={fadeInUp}
    className={twMerge(
      `mb-3.5 text-gray-600 tracking-wide uppercase font-semibold text-base ${className}`
    )}>
    {children}
  </motion.h2>
);

SectionTitle.defaultProps = {
  className: '',
};

SectionTitle.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export const SectionTitleSub: FC<PropsWithChildren<SectionProps>> = ({ children, className }) => (
  <motion.h4
    variants={fadeInUp}
    className={twMerge(
      `mb-7 text-gray-800 text-2xl sm:text-3xl md:text-4xl tracking-wide font-semibold ${className}`
    )}>
    {children}
  </motion.h4>
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
  <motion.section
    variants={fadeInUp}
    className={twMerge(`px-6 sm:px-10 md:px-24 lg:px-28 py-10 ${className}`)}>
    <>{children}</>

    {complete && (
      <Link href={listLink}>
        <a>
          <Button text={listType} className="flex mt-4 mb-12 ml-auto" sub />
        </a>
      </Link>
    )}
  </motion.section>
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
