"use strict";

import React, {Component} from 'react';

class TodoList extends React.Component {
  render() {
    let { todos, onDelete } = this.props;
    let rows = todos.map((value, index) => {
      return (
          <li key={index}
          onClick={onDelete.bind(null, value, todos)}>Todo {value}
          </li>);
    });

    return (
        <ul>{rows}</ul>
    );
  }
}

export default TodoList;