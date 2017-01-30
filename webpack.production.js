const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = Object.assign({}, require('./webpack.config'),
  {
    output: {
      path: path.join(__dirname, 'public'),
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
          from: './d.png'
        },
        {
          from: './header.ai'
        },
        {
          from: './header.png'
        },
        {
          from: './i.png'
        },
        {
          from: './person.png'
        },
        {
          from: './r.png'
        },
        {
          from: './reset.css'
        },
        {
          from: './simple-grid.css'
        },
        {
          from: './uscapitol.png'
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
