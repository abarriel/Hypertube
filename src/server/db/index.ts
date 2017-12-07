import * as pgp from 'pg-promise';

const initPostgresSQL = async (db: Iconfig['db']) => {
  const { postgres: postgresConfig } = db;
  const pgConnector = pgp();
  const database = await pgConnector(postgresConfig);
  const client = await database.connect();
  return client;
};

export default initPostgresSQL;
