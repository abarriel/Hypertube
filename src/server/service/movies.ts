import * as _ from 'lodash';
import * as express from 'express';
import * as Knex from 'knex';

import { DB } from '../core';
import { moviesFormValidate } from './validation/moviesForm';

import { validate, IsOptional, IsIn, Contains, IsInt, Length, IsEmail, IsFQDN, IsDate, Min, Max, ArrayContains} from "class-validator";

// const previewMovieInfos = ['imdb_id', 'title', 'year', 'imdb_rating', 'cover_image', 'summary'];
const previewMovieInfos = ['released', 'title'];

const service = {
  async post(req: express.Request, res: express.Response) {
  },
  async put(req: express.Request, res: express.Response) {
  },
  async delete(req: express.Request, res: express.Response) {
  },
  async get(req: express.Request, res: express.Response) {
    const { filters } = req.app.locals;
    const { limit, offset, genres, years, ratings, q } = filters;

    console.log('filters: ', filters, '\n\n');

    const queryPattern = [`%${_.replace(q, /\s/g, '%')}%`];

    const querySQL = DB.select(previewMovieInfos)
      .from('movies')
      // .whereRaw('genres @> ?', [genres])
      // .whereBetween('year', years)
      // .whereBetween('imdb_rating', ratings)
      // .whereRaw('title ILIKE ?', queryPattern)
      // .orWhereRaw('summary ILIKE ?', queryPattern)
      // .orWhereRaw('actors @> ?', [queryPattern])
      // .orWhereRaw('director ILIKE ?', queryPattern)
      // .orWhereRaw('production ILIKE ?', queryPattern)


      .orderByRaw("CASE WHEN ? ='date' THEN to_date(released, 'DD Mon YYYY') END DESC NULLS LAST", 'date')
      .limit(5)
      .offset(offset);

      console.log(querySQL.toString());
    const movies = await querySQL;

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
