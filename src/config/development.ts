const _ = require('lodash');
const path = require('path');


const developmentConfig = {
  db: {
    client: 'postgresql',
    connection: {
      host: '95.85.22.142',
      port: 5432,
      database: 'postgres',
      user: 'postgres',
      },
    postProcessResponse: (res: any) => {
      if (Array.isArray(res)) {
        return res.map(row => {
          if(typeof row === 'object')
            return _.mapKeys(row, (v:any , k:any) => _.camelCase(k));
        });
      }
      return res;
    },
    migrations: {
      directory: './src/server/database/migrations',
      tableName: 'version'
      },
    seeds: {
        directory: './src/server/database/seeds',
      },
    },
  server: {
    host: '0.0.0.0',
    port: 8888,
  },
  jwt: {
    expiresIn: '10h',
  },
  browserSync: {
    host: '0.0.0.0',
    port: 8080,
    server: {
      baseDir: 'public',
    },
    ui: false,
    logSnippet: false,
    reloadOnRestart: true,
    notify: false,
    snippetOptions: {
      blacklist: '*',
      rule: {
        match: /<\/body>/i,
        fn: () => '',
      },
    },
  },
  debug: false
};

export default developmentConfig;
