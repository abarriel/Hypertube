import config from '../../config';
import initPostgresSQL from './db';
import initServer from './api';

/**
 * Init chain of the server.   DB -> HTTP
 *
 * @param {Config DB}
 */
initPostgresSQL(config.db)
  .then((db: any) => initServer(config, db))
  .catch((err: any) => console.log(err));
