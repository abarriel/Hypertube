import * as Knex from 'knex';
import * as _ from 'lodash';

import * as colors from 'colors/safe';
import { stripIndent } from 'common-tags';
import { DB } from '../../core';

const previewMovieInfos = ['imdb_id', 'title', 'year', 'imdb_rating', 'cover_image', 'summary'];

const Movies = {
  async get(filters: any) {
    const { limit, offset, genres, years, ratings, q, sort } = filters;
    const [type, order = 'asc'] = sort; // escaped and checked before
    console.log(colors.green('filters: '), filters, '\n');
    const queryPattern = [`%${_.replace(q, /\s/g, '%')}%`];
    console.log(queryPattern);
    const querySQL = DB.select(previewMovieInfos)
      .from('movies')
      .where('type', 'movie')
      .whereRaw('genres @> ?', [genres])
      .whereBetween('year', years)
      .whereBetween('imdb_rating', ratings)

      .whereRaw(stripIndent`CASE
        WHEN '${q}' NOT LIKE 'undefined'
        THEN  title ILIKE '${queryPattern}'
        OR    summary ILIKE '${queryPattern}'
        OR    actors @> '{%${queryPattern}}'
        OR    director ILIKE '${queryPattern}'
        OR    production ILIKE '${queryPattern}'
        ELSE TRUE
        END`)

      .orderByRaw(stripIndent`CASE
        WHEN '${type}' = 'date' THEN to_date(released, 'DD Mon YYYY') - date '1900-01-01'
        WHEN '${type}' = 'seeds' THEN seeds
        WHEN '${type}' = 'score' THEN score
        WHEN '${type}' = 'runtime' THEN runtime
        END
        ${order} NULLS LAST`)

      .limit(limit)
      .offset(offset);

    console.log(colors.blue(querySQL.toString()));
    return querySQL;
  },

  async getGenres() {
    const querySQL = DB.select(DB.raw('array_agg(DISTINCT c) from (select unnest(genres) from movies where type=\'movie\') as dt(c)'));

    console.log(colors.blue(querySQL.toString()));
    const [genres] = await querySQL;
    return genres.arrayAgg;
  },

  async single(id: string) {
    console.log('single', id);
    return DB.select().from('movies').where('imdb_id', id).first();
  },

  async ids(ids: string[]) {
    return DB.select(previewMovieInfos).from('movies').whereIn('imdb_id', ids);
  }
};

export { Movies };
