import * as Knex from 'knex';

const initDb = async () => {
  console.log('Knex', Knex);
  // await Knex.migrate.latest();
  // console.log('init');
};

export default initDb;
