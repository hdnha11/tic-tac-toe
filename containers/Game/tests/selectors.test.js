import { getRows } from '../selectors';

describe('Game Selectors', () => {
  let state;

  beforeEach(() => {
    state = {
      game: {
        rows: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
      },
    };
  });

  describe('getRows', () => {
    it('should select rows', () => {
      const expected = [[0, 1, 2], [0, 1, 2], [0, 1, 0]];

      expect(getRows(state)).toEqual([[0, 0, 0], [0, 0, 0], [0, 0, 0]]);

      state.game.rows = expected;
      expect(getRows(state)).toEqual(expected);
    });
  });
});
