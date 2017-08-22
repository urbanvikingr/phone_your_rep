const webpack = require('webpack');
const path = require('path');
const webpackConfig = require('./webpack.config');

module.exports = Object.assign({}, webpackConfig, {
  output: {
    path: path.join(path.resolve(), 'docs'),
    filename: "[name].js"
  },
  devtool: 'cheap-module-source-map',
  plugins: webpackConfig.plugins.concat([
    new webpack.DefinePlugin({
      'process.env': {
          'NODE_ENV': JSON.stringify('production')
      }
    })
  ])
});
