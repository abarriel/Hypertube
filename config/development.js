// *#FCK#jd^@GITHUB-7558e9f6
const path = require('path');

const client = {
  host: '0.0.0.0',
  port: 8080,
};

const developmentConfig = {
  db: {
    postgres: {
      host: 'baasu.db.elephantsql.com',
      port: 5432,
      database: 'dwvmifqb',
      user: 'dwvmifqb',
    },
  },
  client,
  server: {
    host: '0.0.0.0',
    port: 8888,
  },
  jwt: {
    expiresIn: '10h',
  },
  browserSync: {
    ...client,
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
  debug: false,
};

export default developmentConfig;
