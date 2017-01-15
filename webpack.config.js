module.exports = {
    entry: "./script",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
      loaders: [
        { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
      ]
    }
};