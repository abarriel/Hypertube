import * as _ from 'lodash';
import * as express from 'express';
import { DB } from '../core';
import { moviesFormValidate } from './validation/moviesForm';

import { validate, IsOptional, IsIn, Contains, IsInt, Length, IsEmail, IsFQDN, IsDate, Min, Max, ArrayContains} from "class-validator";

const previewMovieInfos = ['imdb_id', 'title', 'year', 'imdb_rating', 'cover_image', 'summary'];

const service = {
  async post(req: express.Request, res: express.Response) {
  },
  async put(req: express.Request, res: express.Response) {
  },
  async delete(req: express.Request, res: express.Response) {
  },
  async get(req: express.Request, res: express.Response) {
    const { filters } = req.app.locals;
    console.log('filters: ', filters);
    const { limit, offset, genres } = filters;
    console.log(genres);
    const movies = await
      DB.select('genres' || previewMovieInfos)
        .from('movies')
        .whereRaw('genres @> ?', [genres])
        .limit(limit)

    //   .limit(limit ? parseInt(limit) : 50)
    //   .offset(offset ? parseInt(offset) : 0);
    // const [{ count }] = await DB.from('movies').count();
    console.log(movies);
    res.json({ movies });
  },
};

const init:any = {
  name: 'movies',
  service,
  before: {
    get: [moviesFormValidate]
  },
  after: {

  }
};

export default init;
