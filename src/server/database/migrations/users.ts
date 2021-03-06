import { DB } from '../../core';
import * as Knex from 'knex';

const createUsersTable = (): Promise<any> => {
  return Promise.all([
    DB.schema.createTableIfNotExists('users', (table: Knex.CreateTableBuilder) => {
      table.increments('id').primary();
      // table.string('username').notNullable().unique();
      table.string('username').notNullable();
      table.string('first_name');
      table.string('last_name');
      // table.string('email').unique();
      table.string('email');
      table.string('lang').defaultTo('eng');
      table.string('profile_picture').defaultTo('default_picture.jpg');
      table.string('password');
      table.specificType('my_list', 'TEXT[]').defaultTo('{}');
      table.specificType('history', 'TEXT[]').defaultTo('{}');
      table.boolean('omniauth').defaultTo(true);
      table.text('provider').defaultTo('local');
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
