import { checkWin, checkFull } from '../../utils/game';
import { MOVE, NEW_GAME } from './constants';

const initialState = () => ({
  rows: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
  turn: 1,
  score: { 1: 0, 2: 0 },
  winner: null,
  winMatrix: null,
  draw: false,
});

const game = (state = initialState(), action) => {
  switch (action.type) {
    case NEW_GAME:
      return { ...initialState(), score: { ...state.score } };

    case MOVE: {
      const turn = state.turn === 1 ? 2 : 1;
      const newRows = state.rows.map(row => [...row]);
      newRows[action.row][action.column] = action.player;

      const result = checkWin(newRows);
      const isFull = checkFull(newRows);

      return {
        ...state,
        rows: newRows,
        turn,
        score: result.winner
          ? { ...state.score, [result.winner]: state.score[result.winner] + 1 }
          : state.score,
        ...result,
        draw: !result.winner && isFull,
      };
    }

    default:
      return state;
  }
};

export default game;
