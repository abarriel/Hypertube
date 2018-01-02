import * as Axios from 'axios';

const axios = Axios.create({
  baseURL: 'http://95.85.22.142:8888/api/',
});

export const reqMovies = (limit, offset) => axios({
  method: 'get',
  url: 'movies',
  params: {
    limit,
    offset,
  },
}).then(({ data, status }) => {
  if (status === 201) {
    throw data;
  }
  return data;
}).catch(err => {});
