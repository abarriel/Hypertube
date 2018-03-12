import {
  LOAD_USER,
} from '../actions/user';

const initialState = {
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USER: {
      return { ...action.data.user };
    }
    default:
      return state;
  }
};

export default reducer;
