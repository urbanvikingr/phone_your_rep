const path = require('path');

module.exports = {
	context: __dirname,
    entry: {
		bundle: "./doc/script/index.js",
		widget: "./doc/widget/script/index.js"
	},
    output: {
        path: path.resolve(__dirname, "doc"),
		publicPath: "/doc/",
        filename: "[name].js"
    },
    module: {
      loaders: [
        { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
      ]
    }
};
