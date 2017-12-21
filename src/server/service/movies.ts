import * as _ from 'lodash';
import { DB } from '../core';
import { INSPECT_MAX_BYTES } from 'buffer';

const service = {
  async post(req, res) {
  },
  async put(req, res) {
  },
  async delete(req, res) {
  },
  async get(req, res) {
    const { limit, offset } = req.query;
    const movies = await DB.select('imdb_id', 'title', 'year', 'imdb_rating', 'cover_image', 'summary').from('movies')
      .limit(limit ? parseInt(limit) : 50)
      .offset(offset ? parseInt(offset) : 0);
    const [{ count }] = await DB.from('movies').count();
    res.json({ count, movies });
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
