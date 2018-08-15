import React from 'react';
import { hot } from 'react-hot-loader';
import { injectGlobal, ThemeProvider } from 'styled-components';
import Main from './Main';
import Board from '../Board';
import theme from '../../themes/default';

injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.84);
    background-color: #57BAAC;
  }
`;

const App = () => (
  <ThemeProvider theme={theme}>
    <Main>
      <Board />
    </Main>
  </ThemeProvider>
);

export default hot(module)(App);
