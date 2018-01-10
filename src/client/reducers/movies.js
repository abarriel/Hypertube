import {
  LOAD_MOVIES,
  ADD_MOVIES,
  UPDATE_SEARCH_MOVIES,
  UPDATE_FILTER_MOVIES,
  RESET_MOVIES,
  LOAD_GENRES,
  LOAD_PREFERRED_MOVIES,
} from '../actions/movies';

const initialState = {
  data: [],
  start: 0,
  count: 0,
  sort: { by: 'name', order: 'ASC' },
  search: '',
  filter: [],
  genres: [],
  preferredMovies: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MOVIES: {
      return { ...state, data: { ...action.data }, count: action.data.movies.length };
    }
    case RESET_MOVIES: {
      return state;
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
    case LOAD_GENRES: {
      return { ...state, genres: action.genres };
    }
    case LOAD_PREFERRED_MOVIES: {
      return { ...state, preferredMovies: action.data.movies };
    }
    default:
      return state;
  }
};

export default reducer;
