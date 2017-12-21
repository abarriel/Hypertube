import { DB } from '../../core';
import * as Knex from 'knex';

const createMoviesTable = (): Promise<any> => Promise.all([
  DB.schema.createTableIfNotExists('movies', (table: Knex.CreateTableBuilder) => {
    table.string('imdb_id').primary();
    table.string('title').notNullable();
    table.integer('year').notNullable();
    table.integer('imdb_rating').notNullable();
    table.text('cover_image').defaultTo('/uploads/default.png');
    table.text('background_image').defaultTo('/uploads/default.png');
    table.text('summary').notNullable();
    table.specificType('genres', 'TEXT[]').notNullable();
    table.specificType('torrents', 'JSON[]');
    table.string('pg').notNullable();
    table.string('runtime').notNullable();
    table.text('director').notNullable();
    table.specificType('actors', 'TEXT[]').notNullable();
    table.specificType('ratings', 'JSON[]').notNullable();
    table.text('box_office');
    table.text('production');
    }),
]);

const deleteMovieTable = (): Promise<any> => {
    return Promise.all([
      DB.schema.dropTableIfExists('movies')
    ]);
  };

export {
  createMoviesTable,
  deleteMovieTable
}

