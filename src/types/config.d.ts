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
  omdb: string,
  jwt: {
    expiresIn: string;
  };
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
