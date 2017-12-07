require('@babel/register');

const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  entry: './src/client/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
  },
  plugins: [
    new BrowserSyncPlugin({
      host: '0.0.0.0',
      port: 8080,
      server: {
        baseDir: 'public',
      },
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
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};