import React from 'react';
import {Route} from 'react-router';
import App from './src/client/app.js'

export default (
    <Route name="app" path="/" handler={App} />
);
