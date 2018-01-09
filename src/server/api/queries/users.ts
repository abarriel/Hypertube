import * as Knex from 'knex';
import * as _ from 'lodash';

import * as colors from 'colors/safe';
import { stripIndent } from 'common-tags';
import { DB } from '../../core';

const singleDataUser = ['id', 'login', 'profilePicture', 'firstName', 'lastName', 'lang'];

const Users = {
  async post(user: any) {
    console.log(colors.green('user: '), user, '\n');

    const querySQL = DB.insert(user)
      .from('users')
      .returning(['id', 'login']);

    console.log(colors.blue(querySQL.toString()));
    return querySQL;
  },

  async isRegistered({ login, id }:any) {
    if (login)
      return (await DB.select(DB.raw(`exists(select * from users WHERE login = '${login}')`)).first()).exists;
    if (id)
      return (await DB.select(DB.raw(`exists(select * from users WHERE id = '${id}')`)).first()).exists;
  },

  async getByLogin(login: string, columns: any) {
   return DB.select(columns).from('users').where('login', login).first();
  },

  async single({ id, columns }:any) {
    console.log(id, columns);
    if (columns === 'all') return DB.select().from('users').where('id', id).first();
    if (!columns) return DB.select(singleDataUser).from('users').where('id', id).first();
  },

  async gets(limit: number, offset: number) {
    return DB
      .select(singleDataUser)
      .from('users')
      .limit(limit)
      .offset(offset);
  }
};

export default Users;
