import { FC } from 'react';
import { Global, css } from '@emotion/react';

const GlobalStyle: FC = () => (
  <Global
    styles={css`
      body {
        margin: 0;
        padding: 0;
        font-family: 'Nunito', Helvetica, Sans-Serif;
        background: #fefaff;
      }
    `}
  />
);

export default GlobalStyle;
