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
  };
  server: {
    host: string;
    port: number;
  };
  jwt: {
    expiresIn: string;
  };
  browserSync: {
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
  host: string;
  port: number;
  };
  debug: boolean;
}