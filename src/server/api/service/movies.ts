import * as _ from 'lodash';
import * as express from 'express';

import middlewaresBinding from '../middleware';
import { Movies } from '../../database/queries';

const previewMovieInfos = ['imdb_id', 'title', 'year', 'imdb_rating', 'cover_image', 'summary'];

class MoviesController {
  name = 'movies';

  @middlewaresBinding('moviesFormValidate')
  async get(req: express.Request, res: express.Response) {
    const { filters } = req.app.locals;
    const movies = await Movies.get(filters);
    res.json({ movies });
  }

  @middlewaresBinding(['isAuthorize'])
  async single(req: express.Request, res: express.Response, next: any) {
    const { id } = req.params;
    if (id === 'genres') return this.genres(req, res);
    if (!/[a-zA-Z0-9]{5,20}/.test(id))
      return next({ type: 'validation', details: 'singlei Wrong Id provided' });
    const movie = await Movies.single(id);
    const { myList, history } = req.user;
    res.json({ movie: { ...movie, inMyList: _.includes(myList, id), seen: _.includes(history, id) } });
  }

  async genres(req: express.Request, res: express.Response) {
    const genres = await Movies.getGenres();
    res.json({ genres });
  }
};

export default MoviesController;
