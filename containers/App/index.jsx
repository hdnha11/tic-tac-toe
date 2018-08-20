import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { injectGlobal, ThemeProvider } from 'styled-components';
import Main from './Main';
import Footer from './Footer';
import Game from '../Game';
import ThemeToggle from '../../components/ThemeToggle';
import light from '../../themes/light';
import dark from '../../themes/dark';

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

const themes = {
  light,
  dark,
};

class App extends Component {
  state = {
    theme: 'light',
  };

  handleThemeToggle = event => {
    this.setState({ theme: event.target.checked ? 'dark' : 'light' });
  };

  render() {
    return (
      <ThemeProvider theme={themes[this.state.theme]}>
        <Main>
          <Game />
          <ThemeToggle onChange={this.handleThemeToggle} />
          <Footer />
        </Main>
      </ThemeProvider>
    );
  }
}

export default hot(module)(App);
