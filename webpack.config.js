const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    context: path.resolve(),
    entry: {
        bundle: "./app/script/index.js",
        widget: "./app/widget/script/index.js"
    },
    output: {
        path: path.resolve(path.resolve(), "doc"),
        publicPath: "/",
        filename: "[name].js"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        }, {
            test: /\.css$/,
            loaders: ['style-loader', 'css-loader']
        }, {
            test: /\.png/,
            loader: 'url-loader?limit=10000'
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './app/index.ejs',
            chunks: ['bundle']
        }),
        new HtmlWebpackPlugin({
            filename: 'index_es.html',
            template: './app/index_es.ejs',
            chunks: ['bundle']
        }),
        new HtmlWebpackPlugin({
            filename: 'widget.html',
            template: './app/widget.ejs',
            chunks: ['widget']
        })
        // new CopyWebpackPlugin([
        //   // {from: 'app/CNAME'}
        // ])
    ]
};
