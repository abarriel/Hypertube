/**
 *
 *  The schema of the config injected.
 * @interface Iconfig
 */
interface Iconfig {
  db: {
    client: string,
    connection: {
        host: string;
        port: number;
        database: string;
        user: string;
    };
    postProcessResponse: () => any,
    migrations: {
      directory: string,
      tableName: string
    };
    seeds: {
        directory: string,
    };
  };
  server: {
    host: string;
    port: number;
  };
  email: {
    address: string,
    password: string,
  },
  openSubApi: {
    username: string,
    password: string,
  }
  omdb: string,
  tmdb: string,
  jwt: {
    expiresIn: string,
    accessTokenSecret: string,
  };
  TrakTv: {
    clientID: string,
    clientSecret: string,
    access_token: string,
  },
  auth: any,
  browserSync: {
    host: string;
    port: number;
    server: {
        baseDir: string;
    };
    ui: boolean;
    logSnippet: boolean;
    reloadOnRestart: boolean;
    notify: boolean;
    snippetOptions: {
      blacklist: string;
      rule: {
          match: RegExp;
          fn: () => string;
      };
    };
  };
  debug: boolean;
}
