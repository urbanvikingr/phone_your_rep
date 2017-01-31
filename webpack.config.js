const path = require('path');

module.exports = {
	context: __dirname,
    entry: {
<<<<<<< Updated upstream
		bundle: "./doc/script/index.js",
		widget: "./doc/widget/script/index.js"
	},
    output: {
		path: path.resolve(__dirname, "doc"),
    	publicPath: "/doc/",
=======
		bundle: "./public/script/index.js",
		widget: "./public/widget/script/index.js"
	},
    output: {
        path: __dirname,
>>>>>>> Stashed changes
        filename: "[name].js"
    },
    module: {
      loaders: [
        { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
      ]
    }
};
