import {
  filter,
} from 'lodash';

export const getMovies = state => state.movies.data;

export const getPreferedMovies = movies => filter(movies, (movie) => parseInt(movie.imdbRating, 0) > 6);

export const getRecentMovies = movies => filter(movies, (movie) => parseInt(movie.year, 0) > 2015)
