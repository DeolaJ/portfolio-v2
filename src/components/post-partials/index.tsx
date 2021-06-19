import React, { FC } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const ParagraphWrapper = styled.p`
  code {
    display: block;
    background-color: #e6e5fd;
    padding: 1rem;
    margin: 1rem 0;
    font-size: 0.875rem;
  }
`;

export const Header: FC = ({ children }) => (
  <h2 className="text-4xl font-semibold mb-4">{children}</h2>
);

export const HeaderTwo: FC = ({ children }) => (
  <h3 className="text-2xl font-semibold mt-8 mb-3">{children}</h3>
);

export const HeaderThree: FC = ({ children }) => (
  <h4 className="text-xl font-semibold mt-6 mb-1">{children}</h4>
);

export const Paragraph: FC = ({ children }) => (
  <ParagraphWrapper className="text-base mb-3">{children}</ParagraphWrapper>
);

export const List: FC = ({ children }) => <ul className="list-disc">{children}</ul>;

export const NumberedList: FC = ({ children }) => <ol className="list-decimal">{children}</ol>;

export const ListItem: FC = ({ children }) => <li className="text-base mb-4">{children}</li>;

export const Code: FC = ({ children }) => (
  <code className="block mt-4 p-4 rounded bg-fuchsia-100">{children}</code>
);

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

HeaderTwo.propTypes = {
  children: PropTypes.node.isRequired,
};

HeaderThree.propTypes = {
  children: PropTypes.node.isRequired,
};

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
};

List.propTypes = {
  children: PropTypes.node.isRequired,
};

NumberedList.propTypes = {
  children: PropTypes.node.isRequired,
};

ListItem.propTypes = {
  children: PropTypes.node.isRequired,
};

Code.propTypes = {
  children: PropTypes.node.isRequired,
};
