import React, {Component, ReactDOM} from 'react';
import {createTodo} from '../actions/todoActions.js';
import TodoStore from '../stores/todoStore.js';

class TodoInput extends Component {
  createHandler() {
    let newTodo = ReactDOM.findDOMNode(this.refs.newTodo).value;
    createTodo(newTodo);

    ReactDOM.findDOMNode(this.refs.newTodo).value = "";
  }

  render() {
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