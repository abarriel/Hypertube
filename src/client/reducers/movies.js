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
  genres: [],
  reqParams: {
    q: '',
    rating: {
      from: 0,
      to: 5,
    },
    selectedGenre: '',
    start: 0,
    count: 0,
  },
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
      return {
        ...state,
        data: [...state.data, ...action.data.movies],
        reqParams: {
          ...state.reqParams,
          count: state.count + action.data.movies.length,
        },
      };
    }
    case LOAD_GENRES: {
      return { ...state, genres: action.genres };
    }
    case LOAD_RECENT_MOVIES: {
      return { ...state, recentMovies: action.data.movies };
    }
    case CHANGE_PARAMS: {
      const q = action.data.q || state.q;
      const rating = action.rating || state.rating;
      const selectedGenre = action.selectedGenre || state.selectedGenre;
      return {
        ...state,
        reqParams: {
          q,
          rating,
          selectedGenre,
        },
      };
    }
    default:
      return state;
  }
};

export default reducer;
