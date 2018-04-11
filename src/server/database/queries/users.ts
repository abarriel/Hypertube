import * as Knex from 'knex';
import * as _ from 'lodash';

import * as colors from 'colors/safe';
import { stripIndent } from 'common-tags';
import { DB } from '../../core';

const singleDataUser = ['id', 'username', 'profilePicture', 'firstName', 'lastName', 'lang', 'my_list', 'history'];

const Users = {
  async post(user: any) {
    const querySQL = DB.insert(user)
      .from('users')
      .returning(['id', 'username', 'omniauth', 'profilePicture']);
    console.log(colors.blue(querySQL.toString()));
    const [users] = await querySQL;
    return users;
  },

  async isRegistered({ username, id, email }:any) {
    let user = {};
    if (username)
      user = await DB.select(['provider', 'id', 'username', 'omniauth', 'profilePicture']).from('users').where('username', username).first();
    if (id && _.isEmpty(user))
      user = await DB.select(['provider', 'id', 'username', 'omniauth', 'profilePicture']).from('users').where('id', id).first();
    if (email && _.isEmpty(user))
      user = await DB.select(['provider', 'id', 'username', 'omniauth', 'profilePicture']).from('users').where('email', email).first();
    if (_.isEmpty(user)) return false;
    return user;
  },

  async update(newUser: any, id: any) {
    let querySQL = 0;
    try {
      const checkPresent = await DB.select().from('users').where('id', id);
      if (checkPresent.length === 0)
        return false;
      if (newUser.email) {
        const resp = await DB.select().from('users').where('email', newUser.email);
        if (resp.length !== 0 && resp[0].id !== id)
            return false;
      }
      await DB.from('users').where('id', id).update(newUser);
      return true;
    } catch (err) {
      return false;
    }
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
