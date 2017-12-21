import {
  filter,
} from 'lodash';

export const getMovies = state => state.movies.data;

export const getPreferedMovies = movies => filter(movies, (movie) => movie.imdbRating > 3);

export const getRecentMovies = movies => filter(movies, (movie) => movie.year > 2015);
