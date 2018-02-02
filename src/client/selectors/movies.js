import {
  filter,
} from 'lodash';

export const getMovies = state => state.movies.data;

export const getMoviesCount = state => state.movies.reqParams.count;

export const getPreferedMovies = movies => filter(movies, (movie) => movie.imdbRating > 3);

export const getGenres = state => state.movies.genres;

export const getSelectedGenre = state => state.movies.reqParams.selectedGenre;

export const getQ = state => state.movies.reqParams.q;

export const getReqParams = state => state.movies.reqParams;

export const getRecentMovies = state => state.movies.recentMovies;
