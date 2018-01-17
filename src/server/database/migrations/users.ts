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
      table.string('lang').defaultTo('eng');
      table.string('profile_picture').defaultTo('default_picture.jpg');
      table.string('password');
      table.specificType('my_list', 'TEXT[]');
      table.specificType('history', 'TEXT[]');
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
