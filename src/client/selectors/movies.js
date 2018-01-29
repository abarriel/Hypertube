import {
  filter,
} from 'lodash';

export const getMovies = state => state.movies.data;

export const getMoviesCount = state => state.movies.count;

export const getPreferedMovies = movies => filter(movies, (movie) => movie.imdbRating > 3);

export const getGenres = state => state.movies.genres;

export const getPreferredMovies = state => state.movies.preferredMovies;

export const getRecentMovies = state => state.movies.recentMovies;

export const getSelectedGenre = state => state.movies.selectedGenre;

export const getQ = state => state.movies.q;
