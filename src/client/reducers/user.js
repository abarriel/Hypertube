import {
  LOAD_USER,
  UPDATE_USER_LIST,
  UPDATE_USER_LANGUAGE,
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
    case UPDATE_USER_LANGUAGE: {
      return { ...state, lang: action.newLang };
    }
    default:
      return state;
  }
};

export default reducer;
