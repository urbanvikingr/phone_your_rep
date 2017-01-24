const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = Object.assign({}, require('./webpack.config'),
  {
    output: {
      path: path.join(__dirname, 'docs'),
      filename: "bundle.js"
    },
    devtool: 'cheap-module-source-map',
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
      }),
      new CopyWebpackPlugin([
        {
          from: './index.html'
        },
        {
          from: './banner.jpg'
        },
        {
          from: './main.css'
        },
        {
          from: './jquery.geocomplete.min.js'
        }
      ])
    ],
  }
);
