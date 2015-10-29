const express = require('express');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config.js');
const path = require('path');

//const graphql = require('graphql');
//const expressGraphql = require('express-graphql');
//const Schema = require('./src/server/schema.js');

const port = 3000;
const app = express();

app.use(express.static(__dirname + '/assets/index.html'));

const compiler = webpack(config);

app.use(webpackMiddleware(compiler, {
  publicPath: config.output.publicPath,
  stats: {
    colors: true,
    hash: false,
    timings: true,
    chunks: false,
    chunkModules: false,
    modules: false
  }
}));

//app.use('/', expressGraphql({
//  schema: Schema,
//  graphiql: true
//}));

app.use(webpackHotMiddleware(compiler));

app.get('*', function response(req, res) {
  res.sendFile(path.join(__dirname, 'assets/index.html'));
});

app.listen(port, 'localhost', function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('==>  Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
});

module.exports = app;