import { DARK } from '@themes/themeTypes'
import { SET_THEME_KEY } from '../action/types';

const initialState = {
  themeKey: DARK
};
const themeKey = (state = initialState, action) => {
  switch (action.type) {
    case SET_THEME_KEY:
      return action.themeKey
    default:
      return state
  }
};

export default themeKey;
