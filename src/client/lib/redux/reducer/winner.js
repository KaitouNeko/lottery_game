import { SET_WINNER } from '../action/types';

const initialState = {
  winner: null
};
const winner = (state = initialState, action) => {
  switch (action.type) {
    case SET_WINNER:
      return {
        ...action.winner
      }
    default:
      return state
  }
};

export default winner;
