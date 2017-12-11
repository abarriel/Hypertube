import * as Knex from "knex";

exports.up = (db: Knex): Promise<any> => {
  return Promise.all([
    db.schema.createTable('users', (table: Knex.CreateTableBuilder) => {
        table.increments('id').primary();
        table.string('login').notNullable();
        table.string('first_name').notNullable();
        table.string('last_name').notNullable();
        table.string('email').notNullable();
        table.enu('lang', ['EN', 'FR']).defaultTo('EN');
        table.string('profilePicture').defaultTo('/uploads/default.png');
        table.string('password').notNullable();
    })
]);
};

exports.down = (db: Knex): Promise<any> => {
  return Promise.all([
    db.schema.dropTable('users')
  ]);
};
