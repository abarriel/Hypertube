import * as Knex from 'knex';
import * as _ from 'lodash';

import * as colors from 'colors/safe';
import { stripIndent } from 'common-tags';
import { DB } from '../../core';

const previewMovieInfos = ['imdb_id', 'title', 'year', 'imdb_rating', 'cover_image', 'summary', 'first_aired', 'seeds',' score', 'runtime', 'type'];

// OR    director ILIKE '${queryPattern}'
const Movies = {
  async get(filters: any) {
    const { limit, offset, genres, years, ratings, q, sort, type: typeVideo } = filters;
    const [type, order = 'asc'] = sort; // escaped and checked before
    console.log(colors.green('filters: '), filters, '\n');
    const queryPattern = [`%${_.replace(q, /\s/g, '%')}%`];
    const querySQL = DB.raw(stripIndent`select * from (SELECT * from (
      SELECT
        "type", "imdb_id" as "imdbId", "imdb_rating" as "imdbRating", "title", "year", "summary", "score", "genres", "production", "cover_image" as "coverImage", "runtime",
        "seeds",
        "actors",
        "first_aired",
        "director"
        from "movies"
        UNION
      SELECT
        "type", "imdb_id" as "imdbId", "imdb_rating" as "imdbRating", "title", "year", "summary", "score", "genres", "production", "cover_image" as "coverImage", "runtime",
        null,
        null,
        "last_aired",
        null
      FROM "shows" ) t
      WHERE ${typeVideo ? `type = '${typeVideo}' AND ` : ''}genres @> '{${genres}}' AND "year" BETWEEN ${years[0]} AND ${years[1]} AND "imdbRating" BETWEEN ${ratings[0]} AND ${ratings[1]} AND CASE
      WHEN '${q}' NOT LIKE 'undefined'
      THEN  title ILIKE '${queryPattern}'
        OR    actors @> '{%${queryPattern}}'
        OR    production ILIKE '${queryPattern}'
        ELSE TRUE
      END
      ORDER BY title asc) a
      ORDER BY CASE
        WHEN '${type}' = 'date' THEN to_date(first_aired, 'YYYY-DD-MM') - date '1900-01-01'
        WHEN '${type}' = 'seeds' AND type = 'movie' THEN seeds
        WHEN '${type}' = 'score' THEN score
      END
      ${order} NULLS LAST
      LIMIT ${limit}
      OFFSET ${offset}
      `);
    console.log(colors.blue(querySQL.toString()));
    const { rows } = await querySQL;
    return rows;
  },

  async getGenres() {
    const querySQL = DB.select(DB.raw('array_agg(DISTINCT c) from (select unnest(genres) from movies where type=\'movie\') as dt(c)'));

    console.log(colors.blue(querySQL.toString()));
    const [genres] = await querySQL;
    return genres.arrayAgg;
  },

  async single(id: string, type = 'movie') {
    if (type === 'movie')
      return DB.select().from('movies').where('imdb_id', id).first();
    if (type === 'shows')
      return DB.select().from('shows').where('imdb_id', id).first();
  },

  async ids(ids: string[]) {
    return DB.select(previewMovieInfos).from('movies').whereIn('imdb_id', ids);
  }
};

export { Movies };
