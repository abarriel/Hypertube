import {
  LOAD_MOVIES,
} from '../actions/movies';

const initialState = {
  data: [],
  count: 0,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MOVIES: {
      return { ...state, data: action.data.movies, count: action.data.count };
    }
    default:
      return state;
  }
};

export default reducer;
