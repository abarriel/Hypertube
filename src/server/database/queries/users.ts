import * as Knex from 'knex';
import * as _ from 'lodash';

import * as colors from 'colors/safe';
import { stripIndent } from 'common-tags';
import { DB } from '../../core';

const singleDataUser = ['id', 'username', 'profilePicture', 'firstName', 'lastName', 'lang', 'my_list', 'history'];

const Users = {
  async post(user: any) {
    console.log(colors.green('user: '), user, '\n');
    const querySQL = DB.insert(user)
      .from('users')
      .returning(['id', 'username', 'omniauth', 'profilePicture']);
    console.log(colors.blue(querySQL.toString()));
    const [users] = await querySQL;
    return users;
  },

  async isRegistered({ username, id, omniauth }:any) {
    let user;
    if (!omniauth) omniauth = true;
    if (username)
      user = await DB.select(['id', 'username', 'omniauth', 'profilePicture']).from('users').where('username', username).andWhere('omniauth', omniauth).first();
    if (id)
      user = await DB.select(['id', 'username', 'omniauth', 'profilePicture']).from('users').where('id', id).andWhere('omniauth', omniauth).first();
    if (_.isEmpty(user)) return false;
    return user;
  },

  async update(newUser: any, id: any) {

    const querySQL = DB.from('users').where('id', id).update(newUser);
    console.log(colors.blue(querySQL.toString()));
    return querySQL;
  },

  async getByUsername(username: string, columns: any) {
   return DB.select(columns).from('users').where('username', username).first();
  },

  async getByEmail(email: string, columns: any) {
    return DB.select(columns).from('users').where('email', email).first();
   },

  async single({ id, columns }:any) {
    if (columns === 'all') return DB.select().from('users').where('id', id).first();
    if (!columns) return DB.select(singleDataUser).from('users').where('id', id).first();
    return DB.select(columns).from('users').where('id', id).first();
  },

  async gets(limit: number, offset: number) {
    return DB
      .select(singleDataUser)
      .from('users')
      .limit(limit)
      .offset(offset);
  }
};

export { Users };
