import React from 'react';
import { shallow } from 'enzyme';
import Board from '../index';
import Table from '../Table';
import Cell from '../Cell';
import Mark from '../../Mark';

describe('<Board />', () => {
  let props;
  let children;
  let renderedBoard;

  const board = () => {
    if (!renderedBoard) {
      renderedBoard = shallow(<Board {...props}>{children}</Board>);
    }

    return renderedBoard;
  };

  beforeEach(() => {
    props = {
      rows: undefined,
      onCellClick: undefined,
    };
    children = undefined;
    renderedBoard = undefined;
  });

  it('should render an empty <Table> component', () => {
    expect(board().find(Table).length).toEqual(1);
    expect(board().find('tr').length).toEqual(0);
  });

  it('should render rows and columns', () => {
    props.rows = [[0, 1, 2], [0, 0, 0], [0, 0, 0]];

    expect(board().find('tr').length).toEqual(3);
    expect(board().find(Cell).length).toEqual(9);
    expect(board().find(Mark).at(1).prop('type')).toEqual('x');
    expect(board().find(Mark).at(2).prop('type')).toEqual('o');
  });

  it('should handle on cell click', () => {
    props.rows = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    props.onCellClick = jest.fn();
    const firstCell = board()
      .find(Cell)
      .first();

    firstCell.simulate('click');

    expect(props.onCellClick).toHaveBeenCalledWith(0, 0);
  });
});
