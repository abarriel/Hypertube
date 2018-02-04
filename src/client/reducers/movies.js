import {
  LOAD_MOVIES,
  ADD_MOVIES,
  RESET_MOVIES,
  LOAD_GENRES,
  UPDATE_MOVIES,
  LOAD_RECENT_MOVIES,
  CHANGE_PARAMS,
  RESET_MOVIES_PARAMS,
} from '../actions/movies';

const initialState = {
  data: [],
  genres: [],
  reqParams: {
    q: '',
    ratings: '',
    genres: '',
    start: 0,
    count: 0,
  },
  recentMovies: [],
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
      };
    }
    case RESET_MOVIES: {
      return {
        ...initialState,
        genres: state.genres,
        reqParams: state.reqParams,
      };
    }
    case RESET_MOVIES_PARAMS: {
      return {
        ...state,
        reqParams: initialState.reqParams,
      };
    }
    case ADD_MOVIES: {
      return {
        ...state,
        data: [...state.data, ...action.data.movies],
        reqParams: {
          ...state.reqParams,
          count: state.reqParams.count + action.data.movies.length,
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
      const q = action.data.q || state.reqParams.q;
      const ratings = action.data.ratings ? `${action.data.ratings.from},${action.data.ratings.to}` : state.reqParams.ratings;
      const genres = action.data.selectedGenre || state.reqParams.selectedGenre;
      return {
        ...state,
        reqParams: {
          ...state.reqParams,
          q,
          ratings,
          genres,
        },
      };
    }
    default:
      return state;
  }
};

export default reducer;
