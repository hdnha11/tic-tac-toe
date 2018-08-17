import { MOVE } from '../constants';
import gameReducer from '../reducer';

describe('Game Reducer', () => {
  let state;

  beforeEach(() => {
    state = {
      rows: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
      turn: 1,
      score: { 1: 0, 2: 0 },
      winner: null,
      winLine: null,
      draw: false,
    };
  });

  it('should return initial state', () => {
    expect(gameReducer(undefined, {})).toEqual(state);
  });

  it('should handle the MOVE action correctly', () => {
    const action = {
      type: MOVE,
      player: 1,
      row: 1,
      column: 2,
    };
    const newState = gameReducer(state, action);

    expect(newState).toEqual({
      ...state,
      rows: [[0, 0, 0], [0, 0, 1], [0, 0, 0]],
      turn: state.turn + 1,
    });
  });

  it('should handle the win', () => {
    state.rows = [[1, 1, 0], [0, 2, 2], [0, 0, 0]];
    const action = {
      type: MOVE,
      player: 1,
      row: 0,
      column: 2,
    };
    const newState = gameReducer(state, action);

    expect(newState).toEqual({
      ...state,
      rows: [[1, 1, 1], [0, 2, 2], [0, 0, 0]],
      turn: state.turn + 1,
      score: { 1: 1, 2: 0 },
      winner: 1,
      winLine: { type: 'row', index: 0 },
    });
  });

  it('should handle the draw', () => {
    state.rows = [[1, 1, 2], [2, 2, 1], [1, 1, 0]];
    const action = {
      type: MOVE,
      player: 2,
      row: 2,
      column: 2,
    };
    const newState = gameReducer(state, action);

    expect(newState).toEqual({
      ...state,
      rows: [[1, 1, 2], [2, 2, 1], [1, 1, 2]],
      turn: state.turn + 1,
      draw: true,
    });
  });
});
