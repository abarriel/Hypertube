import * as Knex from 'knex';
import * as _ from 'lodash';

import * as colors from 'colors/safe';
import { stripIndent } from 'common-tags';
import { DB } from '../../core';

const Comments = {
  async post(comment: any) {
    console.log(colors.green('comment: '), comment, '\n');
    const querySQL = DB.insert(comment)
      .from('comments');

    console.log(colors.blue(querySQL.toString()));
    return querySQL;
  },

  async gets( imdbId: string, limit: number, offset: number) {
    return DB
      .select()
      .from('comments')
      .where('imdb_id', imdbId)
      .limit(limit)
      .offset(offset);
  }
};

export { Comments };
