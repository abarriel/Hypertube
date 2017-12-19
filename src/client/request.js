import * as Axios from 'axios';

const axios = Axios.create({
  baseURL: 'http://95.85.22.142:8888/api/',
});

export const reqMovies = () => axios({
  method: 'get',
  url: 'movies',
}).then(({ data }) => {
  return data.movies;
}).catch(err => err);
