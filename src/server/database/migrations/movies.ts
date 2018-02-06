import { DB } from '../../core';
import * as Knex from 'knex';

const createMoviesTable = (): Promise<any> => Promise.all([
  DB.schema.createTableIfNotExists('movies', (table: Knex.CreateTableBuilder) => {
    table.string('imdb_id').primary();
    table.string('title').notNullable();
    table.integer('year').notNullable();
    table.string('trailer');
    table.text('released');
    table.string('country');
    table.text('awards');
    table.text('dvd');
    table.string('language');
    table.integer('imdb_rating').notNullable();
    table.integer('score');
    table.text('cover_image').defaultTo('/default_cover.png');
    table.text('background_image').defaultTo('/default_cover.png');
    table.text('summary').notNullable();
    table.specificType('genres', 'TEXT[]').notNullable();
    table.specificType('torrents', 'JSON[]');
    table.integer('seeds');
    table.string('pg').notNullable();
    table.integer('runtime');
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

