import React from 'react';
import { shallow } from 'enzyme';
import Players from '../Players';

describe('<Players />', () => {
  let props;
  let children;
  let renderedPlayers;

  const players = () => {
    if (!renderedPlayers) {
      renderedPlayers = shallow(<Players {...props}>{children}</Players>);
    }

    return renderedPlayers;
  };

  beforeEach(() => {
    props = {};
    children = undefined;
    renderedPlayers = undefined;
  });

  it('should render an <div> tag', () => {
    expect(players().type()).toEqual('div');
  });

  it('should render its children', () => {
    children = 'something';

    expect(players().contains(children)).toBe(true);
  });
});
