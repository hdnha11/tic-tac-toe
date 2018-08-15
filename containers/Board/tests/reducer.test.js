import { MOVE } from '../constants';
import boardReducer from '../reducer';

describe('HomePage Reducer', () => {
  let state;

  beforeEach(() => {
    state = {
      rows: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
    };
  });

  it('should return initial state', () => {
    expect(boardReducer(undefined, {})).toEqual(state);
  });

  it('should handle the MOVE action correctly', () => {
    const action = {
      type: MOVE,
      player: 1,
      row: 1,
      column: 2,
    };
    const newState = boardReducer(state, action);

    expect(newState).toEqual({ rows: [[0, 0, 0], [0, 0, 1], [0, 0, 0]] });
  });
});
