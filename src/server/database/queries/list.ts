import * as Knex from 'knex';
import * as _ from 'lodash';

import * as colors from 'colors/safe';
import { stripIndent } from 'common-tags';
import { DB } from '../../core';
import { Users, Movies } from '.';

const List = {
  async add(id: any, imdbId: string, list: string) {
    const movie = await Movies.single(imdbId);
    if (_.isEmpty(movie)) throw ({ type: 'db', details: 'Movies not found' });
    const myListIds = await Users.single({ id, columns: ['myList'] });
    const isInside = await this.isInside(id, imdbId, list);
    if (isInside) throw ({ type: 'db', details: 'Movies already in list' });
    let querySQL;
    if (list === 'history') {
      querySQL = await DB.from('users').where('id', id).update({
        history: DB.raw('array_append(history, ?)', [imdbId]),
      });
    } else {
      querySQL = await DB.from('users').where('id', id).update({
        my_list: DB.raw('array_append(my_list, ?)', [imdbId]),
      });
    }
    return 'querySQL';
  },

  async isInside(id: any, imdbId: string, list: string) {
    const res = await DB.select().from('users').where('id', id).andWhereRaw(`${list} @> '{"${imdbId}"}' `)
    if (_.isEmpty(res)) return undefined;
    return res;
  },

  async delete(id: any, imdbId: string, list: string) {
    const myListIds = await Users.single({ id, columns: ['myList'] });
    const isInside = await this.isInside(id, imdbId, list);
    if (!isInside) throw ({ type: 'db', details: 'Movies not in list' });
    let querySQL;
    if (list === 'history') {
      querySQL = await DB.from('users').where('id', id).update({
        history: DB.raw('array_remove(history, ?', [imdbId]),
      });
    } else {
      querySQL = await DB.from('users').where('id', id).update({
        my_list: DB.raw('array_remove(my_list, ?)', [imdbId]),
      });
    }
  },
};

export { List };
