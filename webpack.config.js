require('@babel/register');

const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const historyApiFallback = require('connect-history-api-fallback');

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
      middleware: [historyApiFallback()],
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
        test: /\.(js|jsx)$/,
        loaders: ['babel-loader?cacheDirectory'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loaders: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file?name=public/[name].[ext]',
      },
    ],
  },
};
