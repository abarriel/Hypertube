import { DB } from '../../core';
import * as Knex from 'knex';

const createCommentsTable = (): Promise<any> => {
  return Promise.all([
    DB.schema.createTableIfNotExists('comments', (table: Knex.CreateTableBuilder) => {
      table.increments('id').primary();
      table.timestamp('date').defaultTo(DB.fn.now())
      table.string('username').notNullable();
      table.integer('user_id').notNullable();
      table.text('profile_picture').notNullable();
      table.string('imdb_id').notNullable();
      table.text('body');
      // table.foreign('user_id').references('users.id').onDelete('CASCADE')
      // table.foreign('username').references('users.username').onUpdate('CASCADE')
    })
]);
};

const deleteCommentsTable = (): Promise<any> => {
  return Promise.all([
    DB.schema.dropTableIfExists('comments')
  ]);
};

export {
  createCommentsTable,
  deleteCommentsTable,
};
