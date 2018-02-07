import {
  isNil,
  isString,
} from 'lodash';

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
    years: '',
    start: 0,
    count: 0,
  },
  recentMovies: [],
  isFetchPossible: true,
  isSearchEmpty: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MOVIES: {
      return { ...state, data: { ...action.data }, count: action.data.movies.length + state.count };
    }
    case UPDATE_MOVIES: {
      const movies = action.data.movies || [];
      return {
        ...state,
        data: movies,
        reqParams: {
          ...state.reqParams,
          count: movies.length,
          start: 0,
        },
        isFetchPossible: movies.length >= 25,
        isSearchEmpty: movies.length === 0,
      };
    }
    case RESET_MOVIES: {
      return {
        ...initialState,
        data: initialState.data,
        genres: state.genres,
        reqParams: {
          ...state.reqParams,
          start: 0,
          count: 0,
        },
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
        isFetchPossible: action.data.movies.length === 25,
        isSearchEmpty: action.data.movies.length === 0,
      };
    }
    case LOAD_GENRES: {
      return { ...state, genres: action.genres };
    }
    case LOAD_RECENT_MOVIES: {
      return { ...state, recentMovies: action.data.movies };
    }
    case CHANGE_PARAMS: {
      const q = action.data.q && !isNil(action.data.q) ? action.data.q : state.reqParams.q;
      const ratings = action.data.ratings ? `${action.data.ratings.from},${action.data.ratings.to}` : state.reqParams.ratings;
      const years = action.data.years ? `${action.data.years.from},${action.data.years.to}` : state.reqParams.years;
      const genres = isString(action.data.selectedGenre) ? action.data.selectedGenre : state.reqParams.genres;
      return {
        ...state,
        reqParams: {
          ...state.reqParams,
          q,
          ratings,
          genres,
          years,
        },
      };
    }
    default:
      return state;
  }
};

export default reducer;
