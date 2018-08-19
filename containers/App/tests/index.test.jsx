import React from 'react';
import { shallow } from 'enzyme';
import Game from '../../Game';
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

  it('should render the footer', () => {
    expect(app().find(Footer).length).toBe(1);
  });
});
