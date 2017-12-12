import { Environment } from './core/Environment';
import initDb from './database';
import initServer from './app';
import * as Knex from 'knex';

/**
 * Init chain of the server. DB -> HTTP
 *
 * @param {Config DB}
 */
const init =  async () => {
  try {
    await initDb();
    await initServer(Environment.getConfig());
  } catch (err) {
    console.log(err);
  }
}

init();
