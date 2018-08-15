import React from 'react';
import { shallow } from 'enzyme';
import Board from '../../Board';
import App from '../index';

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
    expect(app().find(Board).length).toBe(1);
  });
});
