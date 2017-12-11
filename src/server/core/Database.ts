import * as Knex from 'knex';

import { Environment } from './Environment';

export const DB: Knex = Knex({
    client: Environment.getConfig().db.client,
    connection: Environment.getConfig().db.connection,
    pool: { min: 0, max: 10 },
});
