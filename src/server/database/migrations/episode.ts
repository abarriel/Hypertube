import { DB } from '../../core';
import * as Knex from 'knex';

const createEpisodeTable = (): Promise<any> => Promise.all([
  DB.schema.createTableIfNotExists('episodes', (table: Knex.CreateTableBuilder) => {
    table.string('imdb_id').primary(); // tmdb actually
    table.string('tmdb_shows_id').notNullable();
    table.string('tmdb_shows_name').notNullable();
    table.string('title').defaultTo('N/A');
    table.timestamp('unix_released').defaultTo(DB.fn.now())
    table.text('air_date').defaultTo('unknown');
    table.float('rating').defaultTo(0);
    table.float('score').defaultTo(0);
    table.text('cover_image').defaultTo('/default_cover.png');
    table.text('summary').defaultTo('no summary');
    table.integer('runtime').defaultTo(0);
    table.text('season').notNullable();
    table.text('episode').notNullable();
    table.text('magnet').notNullable();
    table.text('hash').notNullable();
    table.text('torrent').notNullable();
    table.string('type').defaultTo('episode');
    }),
]);

const deleteEpisodeTable = (): Promise<any> => {
    return Promise.all([
      DB.schema.dropTableIfExists('episodes')
    ]);
  };

export {
  createEpisodeTable,
  deleteEpisodeTable
}

