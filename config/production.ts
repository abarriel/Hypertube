// *#FCK#jd^@GITHUB-7558e9f6
const path = require('path');

const client = {
  host: '0.0.0.0',
  port: 8080,
};

const productionConfig = {
  db: {
    postgres: {
      host: '95.85.22.142',
      port: 5432,
      database: 'postgres',
      user: 'postgres',
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

export default productionConfig;
