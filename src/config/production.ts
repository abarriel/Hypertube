const path = require('path');

const productionConfig = {
  db: {
    client: 'postgresql',
    connection: {
      host: '95.85.22.142',
      port: 5432,
      database: 'postgres',
      user: 'postgres',
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

export default productionConfig;
