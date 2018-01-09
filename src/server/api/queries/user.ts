import * as Knex from 'knex';
import * as _ from 'lodash';

import * as colors from 'colors/safe';
import { stripIndent } from 'common-tags';
import { DB } from '../../core';


const Movies = {
  async post(user: any) {
    console.log(colors.green('user: '), user, '\n');

    const querySQL = DB.insert(user)
      .from('users')
      .returning(['id', 'login']);

    console.log(colors.blue(querySQL.toString()));
    return querySQL;
  },
  async isRegistered(login: string) {
    const res = await DB.select(DB.raw(`exists(select * from users WHERE login = '${login}')`)).first();
    return res.exists;
  },
  async getByLogin(login: string, columns: any) {
   return DB.select(columns).from('users').where('login', login).first();
  }
};

export default Movies;
