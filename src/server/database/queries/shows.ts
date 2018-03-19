import * as Knex from 'knex';
import * as _ from 'lodash';

import * as colors from 'colors/safe';
import { stripIndent } from 'common-tags';
import { DB } from '../../core';

const Shows = {
  async single(id: string) {
      return DB.select().from('shows').where('imdb_id', id).first();
  },
};

export { Shows };
