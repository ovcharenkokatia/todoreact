"use strict";

import React, { Component } from 'react';
import TodoList from './TodoList.js';

class TodoInput extends Component {
  render () {
    return (
        <div>
          <input ref = "newTodo" type = "text" placeholder="Add new todo" />
          <button onClick={::this.saveTodo}> Add </button>
        </div>
    );
  }

  saveTodo() {
    let { onSave, todos }= this.props;
    let value = React.findDOMNode(this.refs.newTodo).value;

    React.findDOMNode(this.refs.newTodo).value = null;
    onSave(value, todos);
  }
}

export default TodoInput;
