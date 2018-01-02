export const LOAD_MOVIES = 'LOAD_MOVIES';
export const UPDATE_SEARCH_MOVIES = 'UPDATE_SEARCH_MOVIES';

export const loadMovies = data => ({ type: LOAD_MOVIES, data });

export const updateSearchMovies = value => ({
  type: UPDATE_SEARCH_MOVIES,
  value,
});
