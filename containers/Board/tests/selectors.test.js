import { getRows } from '../selectors';

describe('Board Selectors', () => {
  let state;

  beforeEach(() => {
    state = {
      board: {
        rows: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
      },
    };
  });

  describe('getRows', () => {
    it('should select rows', () => {
      const expected = [[0, 1, 2], [0, 1, 2], [0, 1, 0]];

      expect(getRows(state)).toEqual([[0, 0, 0], [0, 0, 0], [0, 0, 0]]);

      state.board.rows = expected;
      expect(getRows(state)).toEqual(expected);
    });
  });
});
