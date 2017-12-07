import * as pgPromise from 'pg-promise';

/**
 *
 *
 * @param {Config DB} db
 * @returns {DB} connect
 */
const initPostgresSQL = async (db: Iconfig['db']) => {
  const { postgres: postgresConfig } = db;
  const pgConnector = pgPromise();
  const database = await pgConnector(postgresConfig);
  const client = await database.connect();
  return client;
};

export default initPostgresSQL;
