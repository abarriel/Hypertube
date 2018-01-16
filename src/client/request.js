import * as Axios from 'axios';

const axios = Axios.create({
  baseURL: 'http://localhost:8888/api/',
});

export const reqMovies = (params) => axios({
  method: 'get',
  url: 'movies',
  params: {
    ...params,
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
