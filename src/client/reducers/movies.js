import {
  LOAD_MOVIES,
  ADD_MOVIES,
  UPDATE_SEARCH_MOVIES,
  UPDATE_FILTER_MOVIES,
} from '../actions/movies';

const initialState = {
  data: [],
  start: 0,
  count: 0,
  sort: { by: 'name', order: 'ASC' },
  search: '',
  filter: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MOVIES: {
      return { ...state, data: action.data.movies, count: action.data.movies.length };
    }
    case ADD_MOVIES: {
      return { ...state, data: [...state.data, ...action.data.movies], count: state.count + action.data.movies.length };
    }
    case UPDATE_SEARCH_MOVIES: {
      return { ...state, search: action.value };
    }
    case UPDATE_FILTER_MOVIES: {
      return { ...state, filter: [...state.filter, action.filter] };
    }
    default:
      return state;
  }
};

export default reducer;
