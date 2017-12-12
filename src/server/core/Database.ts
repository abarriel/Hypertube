import * as Knex from 'knex';

import * as config from '../../../knexfile';

export const DB: Knex = Knex(config);
