/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./common');
const envFile = require('../env/dev.json');

const DIR = path.resolve(__dirname, '../../..');

module.exports = merge(common, {
  mode: 'development',

  devServer: {
    static: {
      directory: path.join(DIR, './public/'),
    },
    historyApiFallback: {
      disableDotRule: true,
    },
    open: true,
    hot: true,
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        CONFIG: JSON.stringify(envFile),
      },
    }),
  ],
});
