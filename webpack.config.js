var webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./index.js",
  output: {
    path: __dirname,
    filename: "./js/bundle.js"
  },
  module: {
    preLoaders: [
      {
        test: /(\.js$|\.jsx$)/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      }
    ],

    loaders: [
      {test: /\.õ/, loader: "style!css"},
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
  },
  eslint: {
    configFile: '.eslintrc'
  }
};