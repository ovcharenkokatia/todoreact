import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

import LoginHandler from './js/components/ToDoItem';
import ToDoItem from './js/components/TodoList.js'

let divStyle = {
  color: "red",
  "textAlign": "center"
};

let App = React.createClass({
  render() {
    return (
        <div className="nav" style={divStyle}>
          <p className="app">todos</p>

          <p className="toDoItem"><ToDoItem/></p>
          <RouteHandler/>
        </div>
    );
  }
});

let routes = (
    <Route name="app" path="/" handler={App}>
    </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});