import express from 'express';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from './webpack.config.js';
import path from 'path';

import schema from './src/server/graphql/schema.js';
import expressGraphql from 'express-graphql';

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(webpackMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

app.use('/graphql', expressGraphql({
  schema: schema,
  graphiql: true
}));

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