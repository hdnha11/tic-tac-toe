import { checkWin, checkFull } from '../game';

describe('Game Utils', () => {
  describe('checkWin', () => {
    it('should check row 1', () => {
      const rows = [[1, 1, 1], [0, 2, 2], [0, 2, 0]];
      const result = checkWin(rows);

      expect(result.winner).toEqual(1);
      expect(result.winLine).toEqual({ type: 'row', index: 0 });
    });

    it('should check row 2', () => {
      const rows = [[0, 2, 2], [1, 1, 1], [0, 2, 0]];
      const result = checkWin(rows);

      expect(result.winner).toEqual(1);
      expect(result.winLine).toEqual({ type: 'row', index: 1 });
    });

    it('should check row 3', () => {
      const rows = [[0, 2, 2], [0, 2, 0], [1, 1, 1]];
      const result = checkWin(rows);

      expect(result.winner).toEqual(1);
      expect(result.winLine).toEqual({ type: 'row', index: 2 });
    });

    it('should check column 1', () => {
      const rows = [[1, 2, 1], [1, 1, 2], [1, 2, 0]];
      const result = checkWin(rows);

      expect(result.winner).toEqual(1);
      expect(result.winLine).toEqual({ type: 'column', index: 0 });
    });

    it('should check column 2', () => {
      const rows = [[0, 1, 2], [2, 1, 1], [0, 1, 2]];
      const result = checkWin(rows);

      expect(result.winner).toEqual(1);
      expect(result.winLine).toEqual({ type: 'column', index: 1 });
    });

    it('should check column 3', () => {
      const rows = [[0, 2, 1], [0, 2, 1], [2, 1, 1]];
      const result = checkWin(rows);

      expect(result.winner).toEqual(1);
      expect(result.winLine).toEqual({ type: 'column', index: 2 });
    });

    it('should check diagonal 1', () => {
      const rows = [[1, 2, 1], [0, 1, 2], [2, 1, 1]];
      const result = checkWin(rows);

      expect(result.winner).toEqual(1);
      expect(result.winLine).toEqual({ type: 'diagonal', index: 0 });
    });

    it('should check diagonal 2', () => {
      const rows = [[2, 2, 1], [0, 1, 2], [1, 1, 2]];
      const result = checkWin(rows);

      expect(result.winner).toEqual(1);
      expect(result.winLine).toEqual({ type: 'diagonal', index: 1 });
    });
  });

  describe('checkFull', () => {
    it('should return true if full', () => {
      const rows = [[1, 1, 2], [1, 2, 2], [1, 2, 1]];

      expect(checkFull(rows)).toEqual(true);
    });

    it('should return false if there is as least one empty cell', () => {
      const rows = [[1, 1, 2], [1, 2, 2], [1, 2, 0]];

      expect(checkFull(rows)).toEqual(false);
    });
  });
});
