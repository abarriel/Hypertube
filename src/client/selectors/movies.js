import {
  compose,
  sortBy,
  map,
  path,
  filter,
  not,
  isNil,
  uniqBy,
  toLower,
  values,
  isEmpty,
} from 'ramda';

export const getMovies = state => state.movies.data;