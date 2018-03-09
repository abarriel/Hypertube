import { DB } from '../../core';
import * as Knex from 'knex';

const createMoviesTable = (): Promise<any> => Promise.all([
  DB.schema.createTableIfNotExists('movies', (table: Knex.CreateTableBuilder) => {
    table.string('imdb_id').primary();
    table.string('title').notNullable();
    table.integer('year').notNullable();
    table.string('trailer').defaultTo('uDy_cvf4nDg');
    table.text('first_aired');
    table.text('released').defaultTo('unknown');
    table.string('country').defaultTo('unknown');
    table.text('awards').defaultTo('unknown');
    table.string('language').defaultTo('English');
    table.integer('imdb_rating').notNullable();
    table.integer('score').defaultTo(0);
    table.text('cover_image').defaultTo('/default_cover.png');
    table.text('background_image').defaultTo('/default_cover.png');
    table.text('summary').notNullable();
    table.specificType('genres', 'TEXT[]').notNullable();
    table.specificType('torrents', 'JSON[]').notNullable();
    table.integer('seeds').defaultTo(0);
    table.string('pg').defaultTo('N/A');
    table.integer('runtime').defaultTo(0);
    table.text('director').notNullable();
    table.specificType('actors', 'TEXT[]').notNullable();
    table.specificType('ratings', 'JSON[]').notNullable();
    table.text('box_office').defaultTo('unknown');
    table.text('production').defaultTo('unknown');
    table.text('type').defaultTo('movie');
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

