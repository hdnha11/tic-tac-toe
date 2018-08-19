import React from 'react';
import { hot } from 'react-hot-loader';
import { injectGlobal, ThemeProvider } from 'styled-components';
import Main from './Main';
import Footer from './Footer';
import Game from '../Game';
import theme from '../../themes/default';

injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.84);
  }

  a {
    text-decoration: none;
  }
`;

const App = () => (
  <ThemeProvider theme={theme}>
    <Main>
      <Game />
      <Footer />
    </Main>
  </ThemeProvider>
);

export default hot(module)(App);
