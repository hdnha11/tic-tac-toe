import { combineReducers } from 'redux';
import { MOVE } from './constants';

const initialState = () => [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

const rows = (state = initialState(), action) => {
  switch (action.type) {
    case MOVE: {
      const newBoard = state.map(row => [...row]);
      newBoard[action.row][action.column] = action.player;

      return newBoard;
    }

    default:
      return state;
  }
};

const turn = (state = 1, action) => {
  switch (action.type) {
    case MOVE:
      return state === 1 ? 2 : 1;
    default:
      return state;
  }
};

const board = combineReducers({
  rows,
  turn,
});

export default board;
