import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Table from './Table';
import Cell from './Cell';
import Mark from '../Mark';

const MARKS = {
  1: 'x',
  2: 'o',
};

class Board extends Component {
  static propTypes = {
    rows: PropTypes.array,
    winMatrix: PropTypes.array,
    onCellClick: PropTypes.func,
  };

  static defaultProps = {
    rows: [],
    winMatrix: null,
    onCellClick: null,
  };

  handleCellClick = (row, column, value) => () => {
    const { onCellClick } = this.props;

    if (onCellClick && !value) {
      onCellClick(row, column);
    }
  };

  render() {
    const { rows, winMatrix } = this.props;

    return (
      <Table>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((column, columnIndex) => (
                <Cell
                  key={columnIndex}
                  highlight={winMatrix && !!winMatrix[rowIndex][columnIndex]}
                  onClick={this.handleCellClick(rowIndex, columnIndex, column)}
                >
                  <Mark type={MARKS[column]} />
                </Cell>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}

export default Board;
