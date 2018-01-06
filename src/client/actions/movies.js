export const LOAD_MOVIES = 'LOAD_MOVIES';
export const UPDATE_FILTER_MOVIES = 'UPDATE_FILTER_MOVIES';
export const UPDATE_SEARCH_MOVIES = 'UPDATE_SEARCH_MOVIES';
export const ADD_MOVIES = 'ADD_MOVIES';

export const loadMovies = data => ({ type: LOAD_MOVIES, data });

export const addMovies = data => ({ type: ADD_MOVIES, data });

export const updateSearchMovies = value => ({
  type: UPDATE_SEARCH_MOVIES,
  value,
});

export const updateFilterMovies = filter => ({
  type: UPDATE_FILTER_MOVIES,
  filter,
});
