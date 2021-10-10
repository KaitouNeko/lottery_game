import { SET_MEMBER_LIST } from '../action/types';

const initialState = {
  memberList: []
};
const memberList = (state = initialState, action) => {
  switch (action.type) {
    case SET_MEMBER_LIST:
      return [...action.memberList]

    default:
      return state
  }
};

export default memberList;
