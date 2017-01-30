const path = require('path');

module.exports = {
	context: __dirname,
    entry: {
		bundle: "./public/script/index.js",
		widget: "./public/widget/script/index.js"
	},
    output: {
		path: path.resolve(__dirname, "build"),
    	publicPath: "/public/",
        filename: "[name].js"
    },
    module: {
      loaders: [
        { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
      ]
    }
};
