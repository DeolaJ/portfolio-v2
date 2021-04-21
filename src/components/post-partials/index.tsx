import React, { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';

type PostComponentProps = {
  children: ReactNode;
};

export const Header: FC<PostComponentProps> = ({ children }) => (
  <h2 className="text-2xl font-semibold">{children}</h2>
);

export const Paragraph: FC<PostComponentProps> = ({ children }) => (
  <p className="text-sm">{children}</p>
);

export const Code: FC<PostComponentProps> = ({ children }) => <code>{children}</code>;

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
};

Code.propTypes = {
  children: PropTypes.node.isRequired,
};
