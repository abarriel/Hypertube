import * as _ from 'lodash';
import * as express from 'express';
import * as Knex from 'knex';
import { stripIndent } from 'common-tags';
import { DB } from '../core';
import { moviesFormValidate } from './validation/moviesForm';

import { validate, IsOptional, IsIn, Contains, IsInt, Length, IsEmail, IsFQDN, IsDate, Min, Max, ArrayContains} from "class-validator";

// const previewMovieInfos = ['imdb_id', 'title', 'year', 'imdb_rating', 'cover_image', 'summary'];
const previewMovieInfos = ['title', 'seeds'];

const service = {
  async post(req: express.Request, res: express.Response) {
  },
  async put(req: express.Request, res: express.Response) {
  },
  async delete(req: express.Request, res: express.Response) {
  },
  async get(req: express.Request, res: express.Response) {
    const { filters } = req.app.locals;
    const { limit, offset, genres, years, ratings, q, sort } = filters;
    const [type, order = 'asc'] = sort; // escaped and checked before
    console.log('filters: ', filters, '\n');

    const queryPattern = [`%${_.replace(q, /\s/g, '%')}%`];

    const querySQL = DB.select(previewMovieInfos)
      .from('movies')

      .whereRaw('genres @> ?', [genres])
      .whereBetween('year', years)
      .whereBetween('imdb_rating', ratings)

      .whereRaw('title ILIKE ?', queryPattern)
      .orWhereRaw('summary ILIKE ?', queryPattern)
      .orWhereRaw('actors @> ?', [queryPattern])
      .orWhereRaw('director ILIKE ?', queryPattern)
      .orWhereRaw('production ILIKE ?', queryPattern)

      .orderByRaw(stripIndent`CASE
        WHEN '${type}' = 'date' THEN to_date(released, 'DD Mon YYYY') - date '1900-01-01'
        WHEN '${type}' = 'seeds' THEN seeds
        WHEN '${type}' = 'score' THEN score
        WHEN '${type}' = 'runtime' THEN runtime
        END
        ${order} NULLS LAST`)

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
