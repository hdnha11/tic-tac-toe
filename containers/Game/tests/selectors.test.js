import {
  getRows,
  getTurn,
  getScore,
  getWinner,
  getWinLine,
  getDraw,
} from '../selectors';

describe('Game Selectors', () => {
  let state;

  beforeEach(() => {
    state = {
      game: {
        rows: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
        turn: 1,
        score: { 1: 0, 2: 0 },
        winner: null,
        winLine: null,
        draw: false,
      },
    };
  });

  describe('getRows', () => {
    it('should return rows', () => {
      const expected = [[0, 1, 2], [0, 1, 2], [0, 1, 0]];

      expect(getRows(state)).toEqual([[0, 0, 0], [0, 0, 0], [0, 0, 0]]);

      state.game.rows = expected;
      expect(getRows(state)).toEqual(expected);
    });
  });

  describe('getTurn', () => {
    it('should return turn', () => {
      const expected = 2;

      expect(getTurn(state)).toEqual(1);

      state.game.turn = expected;
      expect(getTurn(state)).toEqual(expected);
    });
  });

  describe('getScore', () => {
    it('should return score', () => {
      const expected = { 1: 2, 2: 1 };

      expect(getScore(state)).toEqual({ 1: 0, 2: 0 });

      state.game.score = expected;
      expect(getScore(state)).toEqual(expected);
    });
  });

  describe('getWinner', () => {
    it('should return winner', () => {
      const expected = 2;

      expect(getWinner(state)).toEqual(null);

      state.game.winner = expected;
      expect(getWinner(state)).toEqual(expected);
    });
  });

  describe('getWinLine', () => {
    it('should return winLine', () => {
      const expected = { type: 'row', index: 0 };

      expect(getWinLine(state)).toEqual(null);

      state.game.winLine = expected;
      expect(getWinLine(state)).toEqual(expected);
    });
  });

  describe('getDraw', () => {
    it('should return draw', () => {
      const expected = true;

      expect(getDraw(state)).toEqual(false);

      state.game.draw = expected;
      expect(getDraw(state)).toEqual(expected);
    });
  });
});
