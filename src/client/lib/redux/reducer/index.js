import { combineReducers } from 'redux';
import themeKey from './themeKey';
import memberList from './memberList'
import winner from './winner'

export default combineReducers({
  themeKey,
  memberList,
  winner
});
