import { SET_THEME_KEY, SET_MEMBER_LIST, SET_WINNER } from './types';

const setThemeKey = (themeKey) => ({
  type: SET_THEME_KEY,
  themeKey
})

const setMemberList = (memberList) => ({
  type: SET_MEMBER_LIST,
  memberList
})

const setWinner = (winner) => ({
  type: SET_WINNER,
  winner
})

export { setThemeKey, setMemberList, setWinner }
