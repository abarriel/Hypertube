import * as Knex from 'knex';
import * as _ from 'lodash';

import * as colors from 'colors/safe';
import { stripIndent } from 'common-tags';
import { DB } from '../../core';

const singleDataUser = ['id', 'username', 'profilePicture', 'firstName', 'lastName', 'lang'];

const Users = {
  async post(user: any) {
    console.log(colors.green('user: '), user, '\n');
    const querySQL = DB.insert(user)
      .from('users')
      .returning(['id', 'username', 'omniauth']);

    console.log(colors.blue(querySQL.toString()));
    return querySQL;
  },

  async isRegistered({ username, id, omniauth }:any) {
    if(!omniauth) omniauth = true;
    if (username)
      return (await DB.select(DB.raw(`exists(select * from users WHERE username = '${username}' AND omniauth = '${omniauth}')`)).first()).exists;
    if (id)
      return (await DB.select(DB.raw(`exists(select * from users WHERE id = '${id}' AND omniauth = '${omniauth}')`)).first()).exists;
  },

  async getByUsername(username: string, columns: any) {
   return DB.select(columns).from('users').where('username', username).first();
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
