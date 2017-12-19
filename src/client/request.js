import * as Axios from 'axios';

import { LOAD_MOVIES } from './actions/movies';

const axios = Axios.create({
  baseURL: 'http://95.85.22.142:8888/api/',
});

export const reqMovies = () => axios({
  method: 'get',
  url: 'movies',
}).then(res => {
  console.log('res: ', res);
}).catch(err => err);
