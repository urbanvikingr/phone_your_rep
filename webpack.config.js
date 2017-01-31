const path = require('path');

module.exports = {
	context: __dirname,
    entry: {
		bundle: "./app/script/index.js",
		widget: "./app/widget/script/index.js"
	},
    output: {
        path: path.resolve(__dirname, "doc"),
		publicPath: "/docs/",
        filename: "[name].js"
    },
    module: {
      loaders: [
        { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
      ]
    }
};
