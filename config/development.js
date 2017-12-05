// *#FCK#jd^@GITHUB-7558e9f6
const path = require('path');

const client = {
  host: '0.0.0.0',
  port: 8000,
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
  server: {
    host: '0.0.0.0',
    port: 8888,
  },
  client,
  jwt: {
    expiresIn: '10h',
  },
  devServer: {
    contentBase: path.join(__dirname, '../public'),
    clientLogLevel: 'none',
    historyApiFallback: true, // check this option, it's important
    hot: true,
    hotOnly: true,
    inline: false,
    noInfo: true,
    open: true,
    watchContentBase: true,
    host: client.host,
    port: client.port,
  },
  debug: false,
};

export default developmentConfig;
