var webpack = require('webpack');
var path = require('path');

module.exports = function(config) {
  config.set({
    browsers: ['Chrome'],
    singleRun: true,
    files: [
        './tests.webpack.js'
    ],
    frameworks: ['jasmine'],
    preprocessors: {
      './tests.webpack.js': 'webpack'
    },
    webpack: {
      module: {
        loaders: [{
          test: /\.(js|jsx)$/,
          exclude: /(node_modules)/,
          loader: 'babel'
        }]
      }
    }
  })
};
