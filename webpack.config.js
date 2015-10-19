var webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./js/index.js",
  output: {
    path: __dirname,
    filename: "./js/bundle.js"
  },
  module: {
    loaders: [
      {test: /\.css$/, loader: "style!css"},
      {
        test: /(\.js$|\.jsx$)/,
        exclude: /node_modules/,
        loaders: ["react-hot", "babel-loader"]
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]"
      }
    ]
  }
};