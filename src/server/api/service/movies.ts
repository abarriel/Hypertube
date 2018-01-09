import * as _ from 'lodash';
import * as express from 'express';

import { moviesFormValidate } from '../validation';
import Movies from '../queries/movies';

const previewMovieInfos = ['imdb_id', 'title', 'year', 'imdb_rating', 'cover_image', 'summary'];

const service = {
  async get(req: express.Request, res: express.Response) {
    const { filters } = req.app.locals;
    const movies = await Movies.get(filters);
    res.json({ movies });
  },

  async single(req: express.Request, res: express.Response, next: any) {
    const { id } = req.params;
    if (id === 'genres') return service.genres(req, res);
    if (!/[a-zA-Z0-9]{1,20}/.test(id))
      return next({ type: 'Validation', details: 'Wrong Id provided' });
    const movie = await Movies.single(id);
    res.json({ movie });
  },
  async genres(req: express.Request, res: express.Response) {
    const genres = await Movies.getGenres();
    res.json({ genres });
  },
};

const init:any = {
  name: 'movies',
  service,
  before: {
    get: [moviesFormValidate]

  },
};

export default init;
