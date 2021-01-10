import React from 'react';
import PropTypes from 'prop-types';

const StackPills = ({ children }) => (
  <li className="px-4 py-2 m-3 text-xs text-gray-600 bg-gray-100 rounded-full md:px-8 md:py-4 md:m-4 md:text-sm sm:text-lg">
    {children}
  </li>
);

StackPills.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StackPills;
