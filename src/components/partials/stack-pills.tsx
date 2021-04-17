import React, { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';

type StackPillsProps = {
  children: ReactNode;
};

const StackPills: FC<StackPillsProps> = ({ children }) => (
  <li className="px-4 py-2 m-3 text-xs font-semibold text-indigo-900 rounded-full bg-indigo-50 md:px-8 md:py-4 md:m-4 md:text-sm">
    {children}
  </li>
);

StackPills.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StackPills;
