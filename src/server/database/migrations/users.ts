import { DB } from '../../core';
import * as Knex from 'knex';

const createUsersTable = (): Promise<any> => {
  return Promise.all([
    DB.schema.createTableIfNotExists('users', (table: Knex.CreateTableBuilder) => {
      table.increments('id').primary();
      table.string('username').notNullable();
      table.string('first_name');
      table.string('last_name');
      table.string('email');
      table.enu('lang', ['EN', 'FR']).defaultTo('EN');
      table.string('profile_picture').defaultTo('upload/default.jpg');
      table.string('password');
      table.boolean('omniauth').defaultTo(true);
    })
]);
};

const deleteUsersTable = (): Promise<any> => {
  return Promise.all([
    DB.schema.dropTableIfExists('users')
  ]);
};

export {
  createUsersTable,
  deleteUsersTable,
};
