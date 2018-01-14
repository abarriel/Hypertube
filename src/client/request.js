import * as Axios from 'axios';

const axios = Axios.create({
  baseURL: 'http://95.85.22.142:8888/api/',
});

export const reqMovies = (
  limit = 25,
  offset = 0,
  genres = '',
) => axios({
  method: 'get',
  url: 'movies',
  params: {
    limit,
    offset,
    genres,
  },
}).then(({ data, status }) => {
  if (status === 201) {
    throw data;
  }
  return data;
}).catch(err => {});


export const getMoviesById = id => axios({
  method: 'get',
  url: 'movies/{id}',
  params: {
    id,
  },
}).then(({ data, status }) => {
  if (status === 201) {
    throw data;
  }
  return data;
}).catch(err => {});

export const getGenres = () => axios({
  method: 'get',
  url: 'movies/genres',
}).then(({ data, status }) => {
  if (status === 201) {
    throw data;
  }
  return data;
}).catch(err => {});
