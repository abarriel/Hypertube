import {
  LOAD_MOVIES,
} from '../actions/movies';

const initialState = {
  data: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MOVIES: {
      return { ...state, data: action.movies};
    }
    default:
      return state;
  }
};

export default reducer;
