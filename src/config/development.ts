const _ = require('lodash');
const path = require('path');

function keysToCamelCase(object) {
  let camelCaseObject = _.cloneDeep(object);

  if (_.isArray(camelCaseObject)) {
    return _.map(camelCaseObject, keysToCamelCase);
  } else {
    camelCaseObject = _.mapKeys(camelCaseObject, (value, key) => {
      return _.camelCase(key);
    });

    // Recursively apply throughout object
    return _.mapValues(camelCaseObject, (value) => {
      if (_.isPlainObject(value)) {
        return keysToCamelCase(value);
      } else if (_.isArray(value)) {
        return _.map(value, keysToCamelCase);
      } else {
        return value;
      }
    });
  }
}

const developmentConfig = {
  db: {
    client: 'postgresql',
    connection: {
      host: '95.85.22.142',
      port: 5432,
      database: 'postgres',
      user: 'postgres',
      },
    wrapIdentifier: (value: any, origImpl: any) => origImpl(_.snakeCase(value)),
    postProcessResponse: (res: any) => keysToCamelCase(res),
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
