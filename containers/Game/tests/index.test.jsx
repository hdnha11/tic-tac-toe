import React from 'react';
import { mount } from 'enzyme';
import { Game } from '../index';
import Board from '../../../components/Board';

describe('<Game />', () => {
  let props;
  let children;
  let renderedGame;

  const game = () => {
    if (!renderedGame) {
      renderedGame = mount(<Game {...props}>{children}</Game>);
    }

    return renderedGame;
  };

  beforeEach(() => {
    props = {
      rows: undefined,
      move: jest.fn(),
      newGame: jest.fn(),
    };
    children = undefined;
    renderedGame = undefined;
  });

  it('should render an Board component', () => {
    expect(game().find(Board).length).toEqual(1);
  });
});
