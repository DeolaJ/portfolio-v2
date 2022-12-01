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
`;

const ListWrapper = styled.li`
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

export const Header: FC = ({ children }) => <h2 className="text-4xl font-bold mb-4">{children}</h2>;

export const HeaderTwo: FC = ({ children }) => (
  <h3 className="text-2xl font-bold mt-8 mb-3">{children}</h3>
);

export const HeaderThree: FC = ({ children }) => (
  <h4 className="text-xl font-bold mt-6 mb-1">{children}</h4>
);

export const Paragraph: FC = ({ children }) => (
  <ParagraphWrapper className="text-base mb-3">{children}</ParagraphWrapper>
);

export const List: FC = ({ children }) => <ul className="list-disc">{children}</ul>;

export const NumberedList: FC = ({ children }) => <ol className="list-decimal">{children}</ol>;

export const ListItem: FC = ({ children }) => (
  <ListWrapper className="text-base mb-4">{children}</ListWrapper>
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
