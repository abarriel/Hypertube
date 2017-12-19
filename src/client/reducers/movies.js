import {
  LOAD_MOVIES,
} from '../actions/movies';

const reducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_MOVIES: {
      return { ...state };
    }
    default:
      return state;
  }
};

export default reducer;
