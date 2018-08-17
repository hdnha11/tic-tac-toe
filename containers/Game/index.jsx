import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Board from '../../components/Board';
import Result from '../../components/Result';
import Button from '../../components/Button';
import Score from '../../components/Score';
import Wrapper from './Wrapper';
import Header from './Header';
import Footer from './Footer';
import Body from './Body';
import * as gameActionCreators from './actions';
import { getRows, getTurn, getScore, getWinner, getDraw } from './selectors';

export class Game extends Component {
  static propTypes = {
    rows: PropTypes.array,
    turn: PropTypes.number,
    score: PropTypes.object,
    winner: PropTypes.number,
    draw: PropTypes.bool,
    move: PropTypes.func.isRequired,
    newGame: PropTypes.func.isRequired,
  };

  static defaultProps = {
    turn: 1,
    rows: [],
    score: {},
    winner: 0,
    draw: false,
  };

  handleMove = (row, column) => {
    const { turn, move } = this.props;

    move({ player: turn, row, column });
  };

  handleRestartClick = () => {
    const { newGame } = this.props;

    newGame();
  };

  render() {
    const {
      rows, score, turn, winner, draw,
    } = this.props;

    return (
      <Wrapper>
        <Header>
          <Score score={score} turn={turn} />
        </Header>
        <Body>
          {winner || draw ? (
            <Result winner={winner} draw={draw} />
          ) : (
            <Board rows={rows} onCellClick={this.handleMove} />
          )}
        </Body>
        <Footer>
          <Button onClick={this.handleRestartClick} big>
            Restart Game
          </Button>
        </Footer>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  rows: getRows(state),
  turn: getTurn(state),
  score: getScore(state),
  winner: getWinner(state),
  draw: getDraw(state),
});

export default connect(
  mapStateToProps,
  gameActionCreators,
)(Game);
