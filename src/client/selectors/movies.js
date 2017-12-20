import {
  filter,
} from 'lodash';

export const getMovies = state => state.movies.data;

export const getPreferedMovies = movies => filter(movies, (movie) => parseInt(movie.imdbRating, 0) > 6);
