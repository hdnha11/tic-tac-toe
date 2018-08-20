import React from 'react';
import { shallow } from 'enzyme';
import Game from '../../Game';
import ThemeToggle from '../../../components/ThemeToggle';
import App from '../index';
import Footer from '../Footer';

describe('<App />', () => {
  let props;
  let children;
  let renderedApp;

  const app = () => {
    if (!renderedApp) {
      renderedApp = shallow(<App {...props}>{children}</App>);
    }

    return renderedApp;
  };

  beforeEach(() => {
    props = undefined;
    children = undefined;
    renderedApp = undefined;
  });

  it('should render the game board', () => {
    expect(app().find(Game).length).toBe(1);
  });

  it('should render the theme toggle', () => {
    expect(app().find(ThemeToggle).length).toBe(1);
  });

  it('should render the footer', () => {
    expect(app().find(Footer).length).toBe(1);
  });

  it('should have correct theme state', () => {
    expect(app().state('theme')).toBe('light');
    app()
      .find(ThemeToggle)
      .props()
      .onChange({ target: { checked: true } });
    expect(app().state('theme')).toBe('dark');
  });
});
