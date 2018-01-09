import { DB } from '../../core';
import * as Knex from "knex";

const createUsersTable = (): Promise<any> => {
  return Promise.all([
    DB.schema.createTableIfNotExists('users', (table: Knex.CreateTableBuilder) => {
      table.increments('id').primary();
      table.string('login').notNullable();
      table.string('first_name').notNullable();
      table.string('last_name').notNullable();
      table.string('email').notNullable();
      table.enu('lang', ['EN', 'FR']).defaultTo('EN');
      table.string('profile_picture');
      table.string('password').notNullable();
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
