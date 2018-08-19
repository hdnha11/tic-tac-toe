import { MOVE, NEW_GAME } from '../constants';
import { move, newGame } from '../actions';

describe('Game Actions', () => {
  describe('move', () => {
    it('should return correct type and data', () => {
      expect(move({ player: 1, row: 1, column: 1 })).toEqual({
        type: MOVE,
        player: 1,
        row: 1,
        column: 1,
      });
    });
  });

  describe('newGame', () => {
    it('should return correct type', () => {
      expect(newGame()).toEqual({
        type: NEW_GAME,
      });
    });
  });
});
