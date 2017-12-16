import { DB } from '../core';
import { createUsersTable } from './migrations/users';

const initDb = async () => {
  await createUsersTable();
  // init Movies in scrapper.ts
};

export default initDb;
