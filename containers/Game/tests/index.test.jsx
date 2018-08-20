import React from 'react';
import { mount } from 'enzyme';
import { Game } from '../index';
import Board from '../../../components/Board';
import Score from '../../../components/Score';
import Result from '../../../components/Result';
import Button from '../../../components/Button';

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
      turn: undefined,
      score: undefined,
      winner: undefined,
      winMatrix: undefined,
      draw: undefined,
      move: jest.fn(),
      newGame: jest.fn(),
    };
    children = undefined;
    renderedGame = undefined;
  });

  it('should render an Board component', () => {
    expect(game().find(Board).length).toEqual(1);
  });

  it('should pass winMatrix prop to Board component', () => {
    props.winMatrix = [[1, 1, 1], [0, 0, 0], [0, 0, 0]];
    expect(game()
      .find(Board)
      .first()
      .prop('winMatrix')).toEqual(props.winMatrix);
  });

  it('should render an Score component', () => {
    expect(game().find(Score).length).toEqual(1);
  });

  it('should render an restart game button', () => {
    expect(game()
      .find(Button)
      .contains('Restart Game')).toBe(true);
  });

  it('should render Result if there is winner', () => {
    props.winner = 1;

    expect(game().find(Result).length).toEqual(1);
    expect(game()
      .find(Result)
      .prop('winner')).toEqual(props.winner);
  });

  it('should render Result if draw', () => {
    props.draw = true;

    expect(game().find(Result).length).toEqual(1);
    expect(game()
      .find(Result)
      .prop('draw')).toEqual(true);
  });

  it('should handle restart game click', () => {
    const newGameBtn = game()
      .find({ children: 'Restart Game' })
      .first();

    newGameBtn.simulate('click');

    expect(props.newGame).toHaveBeenCalled();
  });

  it('should handle board cell click', () => {
    props.rows = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    const cell = game()
      .find('td')
      .first();

    cell.simulate('click');

    expect(props.move).toHaveBeenCalledWith({ player: 1, row: 0, column: 0 });
  });
});
