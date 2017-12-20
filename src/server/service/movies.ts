import * as _ from 'lodash';
import { DB } from '../core';

const service = {
  async post(req, res) {
  },
  async put(req, res) {
  },
  async delete(req, res) {
  },
  async get(req, res) {
    const ok = await DB.select('imdb_id', 'title', 'year', 'imdb_rating', 'cover_image', 'summary').from('movies').limit(50);
    res.json({ movies: ok });
  },
};

const init:any = {
  name: 'movies',
  service,
  before: {
  },
  after: {

  }
};

export default init;
