import React, { FC } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const ParagraphWrapper = styled.p`
  code {
    display: inline-block;
    background-color: rgb(224, 231, 255);
    padding: 0 0.325rem;
    line-height: 1.3rem;
    border: 1px solid rgba(208, 206, 241, 0.7);
    border-radius: 0.25rem;
    font-size: 0.75rem;
  }

  + ul {
    margin-top: -0.5rem;
  }

  + ol {
    margin-top: -0.5rem;
  }
`;

const ListWrapper = styled.li`
  margin-left: 2rem;

  + li {
    margin-top: 0.3rem;
  }

  &:last-of-type {
    margin-bottom: 1rem;
  }

  code {
    display: inline-block;
    background-color: rgb(224, 231, 255);
    padding: 0 0.325rem;
    line-height: 1.3rem;
    border: 1px solid rgba(208, 206, 241, 0.7);
    border-radius: 0.25rem;
    font-size: 0.75rem;
  }
`;

export const Header: FC = ({ children }) => (
  <h2 className="text-2xl md:text-3xl font-bold mb-1 text-gray-900">{children}</h2>
);

export const HeaderTwo: FC = ({ children }) => (
  <h3 className="text-xl md:text-2xl font-bold mt-8 mb-1 text-gray-900">{children}</h3>
);

export const HeaderThree: FC = ({ children }) => (
  <h4 className="text-lg md:text-xl font-bold mt-6 mb-1 text-gray-900">{children}</h4>
);

export const HeaderFour: FC = ({ children }) => (
  <h5 className="text-base md:text-lg font-bold mt-6 mb-1 text-gray-900">{children}</h5>
);

export const Paragraph: FC = ({ children }) => (
  <ParagraphWrapper className="text-base md:text-lg mb-3 text-gray-800 leading-6 md:leading-7">
    {children}
  </ParagraphWrapper>
);

export const List: FC = ({ children }) => <ul className="list-disc">{children}</ul>;

export const NumberedList: FC = ({ children }) => <ol className="list-decimal">{children}</ol>;

export const ListItem: FC = ({ children }) => (
  <ListWrapper className="text-base md:text-lg mb-1">{children}</ListWrapper>
);

export const Code: FC = ({ children }) => (
  <code className="block my-4 p-4 rounded text-sm bg-indigo-100 whitespace-pre-wrap break-words">
    {children}
  </code>
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
