import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';

const initialState = {
  themeKey: '',
  memberList: [],
  winner: null
};
export const initializeStore = (preloadedState = initialState) => {
  const middles = [];
  let rootWrapper = (f) => f;
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    rootWrapper = composeWithDevTools;
    // return createStore(reducer, preloadedState, composeWithDevTools());
  }

  return createStore(reducer, preloadedState, rootWrapper(applyMiddleware(...middles)));
};

export default initializeStore
