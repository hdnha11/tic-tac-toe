import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Board from '../../components/Board';
import * as boardActionCreators from './actions';
import { getRows, getTurn } from './selectors';

export class BoardContainer extends Component {
  static propTypes = {
    rows: PropTypes.array,
    turn: PropTypes.number,
    move: PropTypes.func.isRequired,
  };

  static defaultProps = {
    turn: 1,
    rows: [],
  };

  handleMove = (row, column) => {
    const { turn, move } = this.props;

    move({ player: turn, row, column });
  };

  render() {
    const { rows } = this.props;

    return (
      <div>
        <Board rows={rows} onCellClick={this.handleMove} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  rows: getRows(state),
  turn: getTurn(state),
});

export default connect(
  mapStateToProps,
  boardActionCreators,
)(BoardContainer);
