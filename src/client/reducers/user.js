import {
  LOAD_USER,
  UPDATE_USER_LIST,
} from '../actions/user';

const initialState = {
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USER: {
      return { ...action.data.user };
    }
    case UPDATE_USER_LIST: {
      return { ...state, myList: action.newList };
    }
    default:
      return state;
  }
};

export default reducer;
