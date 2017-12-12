import { DB } from '../core';

const initDb = async () => {
  await DB.migrate.latest();
};

export default initDb;
