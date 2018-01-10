export const LOAD_MOVIES = 'LOAD_MOVIES';
export const UPDATE_FILTER_MOVIES = 'UPDATE_FILTER_MOVIES';
export const UPDATE_SEARCH_MOVIES = 'UPDATE_SEARCH_MOVIES';
export const ADD_MOVIES = 'ADD_MOVIES';
export const RESET_MOVIES = 'RESET_MOVIES';
export const LOAD_GENRES = 'LOAD_GENRES';
export const LOAD_PREFERRED_MOVIES = 'LOAD_PREFERRED_MOVIES';

export const loadMovies = data => ({ type: LOAD_MOVIES, data });

export const addMovies = data => ({ type: ADD_MOVIES, data });

export const resetMovies = () => ({ type: RESET_MOVIES });

export const updateSearchMovies = value => ({
  type: UPDATE_SEARCH_MOVIES,
  value,
});

export const updateFilterMovies = filter => ({
  type: UPDATE_FILTER_MOVIES,
  filter,
});

export const loadGenres = data => ({
  type: LOAD_GENRES,
  genres: data.genres,
});

export const loadPreferredMovies = data => ({ type: LOAD_PREFERRED_MOVIES, data });
