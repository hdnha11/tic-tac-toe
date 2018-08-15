import { MOVE } from './constants';

export const move = ({ player, row, column }) => ({
  type: MOVE,
  player,
  row,
  column,
});
