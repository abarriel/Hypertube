import { DB } from '../core';
import { createUsersTable, deleteUsersTable } from './migrations/users';
import { createCommentsTable, deleteCommentsTable } from './migrations/comments';

const initDb = async () => {
  await createUsersTable();
  // await deleteUsersTable();
  await createCommentsTable();
  // await createUsersTable();
  // init Movies in scrapper.ts
};

export default initDb;
