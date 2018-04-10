export const LOAD_MOVIES = 'LOAD_MOVIES';
export const UPDATE_MOVIES = 'UPDATE_MOVIES';
export const ADD_MOVIES = 'ADD_MOVIES';
export const RESET_MOVIES = 'RESET_MOVIES';
export const LOAD_GENRES = 'LOAD_GENRES';
export const LOAD_PREFERRED_MOVIES = 'LOAD_PREFERRED_MOVIES';
export const LOAD_RECENT_MOVIES = 'LOAD_RECENT_MOVIES';
export const CHANGE_PARAMS = 'CHANGE_PARAMS';
export const RESET_MOVIES_PARAMS = 'RESET_MOVIES_PARAMS';

export const loadMovies = data => ({ type: LOAD_MOVIES, data });

export const updateMovies = (data, genre) => ({ type: UPDATE_MOVIES, data, selectedGenre: genre });

export const addMovies = data => ({ type: ADD_MOVIES, data });

export const resetMovies = () => ({ type: RESET_MOVIES });

export const resetMoviesParams = () => ({ type: RESET_MOVIES_PARAMS });

export const loadRecentMovies = data => ({ type: LOAD_RECENT_MOVIES, data });

export const changeParams = data => ({ type: CHANGE_PARAMS, data });

export const loadGenres = data => ({
  type: LOAD_GENRES,
  genres: data.genres || [],
});
