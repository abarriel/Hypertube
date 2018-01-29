import {
  LOAD_MOVIES,
  ADD_MOVIES,
  RESET_MOVIES,
  LOAD_GENRES,
  UPDATE_MOVIES,
  LOAD_RECENT_MOVIES,
  CHANGE_PARAMS,
} from '../actions/movies';

const initialState = {
  data: [],
  start: 0,
  count: 0,
  genres: [],
  q: '',
  selectedGenre: '',
  trendsMovies: [],
  preferredMovies: [],
  recentMovies: [],
  actionAndAdventureMovies: [],
  thillersMovies: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MOVIES: {
      return { ...state, data: { ...action.data }, count: action.data.movies.length + state.count };
    }
    case UPDATE_MOVIES: {
      return {
        ...state,
        data: [...action.data.movies],
        count: action.data.movies.length,
        start: 0,
        selectedGenre: action.selectedGenre || state.selectedGenre,
      };
    }
    case RESET_MOVIES: {
      return { ...initialState, genres: state.genres };
    }
    case ADD_MOVIES: {
      return { ...state, data: [...state.data, ...action.data.movies], count: state.count + action.data.movies.length };
    }
    case LOAD_GENRES: {
      return { ...state, genres: action.genres };
    }
    case LOAD_RECENT_MOVIES: {
      return { ...state, recentMovies: action.data.movies };
    }
    case CHANGE_PARAMS: {
      const q = action.data.q || '';
      return { ...state, q };
    }
    default:
      return state;
  }
};

export default reducer;
