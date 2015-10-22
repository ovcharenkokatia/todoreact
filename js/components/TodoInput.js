import React, {Component} from 'react';
import {createTodo} from '../actions/todoActions.js';

class TodoInput extends Component {
  createHandler() {
    let newTodo = React.findDOMNode(this.refs.newTodo).value;
    createTodo(newTodo);

    React.findDOMNode(this.refs.newTodo).value = "";
  }

  render () {
    return (
        <div>
          <input
              placeholder="Add new todo"
              ref = "newTodo"
              type = "text"
          />
          <button onClick={::this.createHandler}>
            Add
          </button>
        </div>
    );
  }
}

export default TodoInput;
