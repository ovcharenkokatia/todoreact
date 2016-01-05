var webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    "./src/client/app.js"
  ],
  devtool: 'eval-source-map',
  output: {
    path: '/',
    publicPath: '/assets/',
    filename: "bundle.js"
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
      {
        test: /(\.js$|\.jsx$)/,
        exclude: /node_modules/,
        loaders: ["react-hot", "babel-loader"]
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]"
      },
      { test: /\.css$/,
        loader: ["css-loader", "file-loader"]
      }
    ]
  },
  eslint: {
    configFile: '.eslintrc'
  }
};