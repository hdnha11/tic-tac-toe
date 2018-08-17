import { MOVE, NEW_GAME } from './constants';

export const move = ({ player, row, column }) => ({
  type: MOVE,
  player,
  row,
  column,
});

export const newGame = () => ({
  type: NEW_GAME,
});
