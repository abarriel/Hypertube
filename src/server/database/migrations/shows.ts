import { DB } from '../../core';
import * as Knex from 'knex';

const createShowsTable = (): Promise<any> => Promise.all([
  DB.schema.createTableIfNotExists('shows', (table: Knex.CreateTableBuilder) => {
    table.string('imdb_id').primary(); // tmdb actually
    table.string('title').notNullable();
    table.string('trailer');
    table.text('first_aired').defaultTo('unknown');
    table.text('last_aired').defaultTo('unknown');
    table.string('country').defaultTo('unknown');
    table.string('language').defaultTo('English');
    table.integer('rating').notNullable();
    table.integer('year').defaultTo(0);
    table.integer('score').notNullable();
    table.text('cover_image').defaultTo('/default_cover.png');
    table.text('background_image').defaultTo('/default_cover.png');
    table.text('summary').notNullable();
    table.specificType('genres', 'TEXT[]').notNullable();
    table.integer('runtime').defaultTo(0);
    table.integer('popularity').defaultTo(0);
    table.specificType('creators', 'TEXT[]').notNullable();
    table.integer('seasons').notNullable();
    table.integer('episodes').notNullable();
    table.boolean('in_production').defaultTo(false);
    table.text('production').defaultTo('unknown');
    table.text('type').defaultTo('shows');
    }),
]);

const deleteShowsTable = (): Promise<any> => {
    return Promise.all([
      DB.schema.dropTableIfExists('shows')
    ]);
  };

export {
  createShowsTable,
  deleteShowsTable
}

