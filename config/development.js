// *#FCK#jd^@GITHUB-7558e9f6
const developmentConfig = {
  db: {
    postgres: {
      host: 'baasu.db.elephantsql.com',
      port: 5432,
      database: 'dwvmifqb',
      user: 'dwvmifqb',
    },
  },
  server: {
    host: '0.0.0.0',
    port: 8888,
  },
  client: {
    host: '0.0.0.0',
    port: 8000,
  },
  jwt: { 
    expiresIn: '10h',
  },
  debug: false,
};

export default developmentConfig;