"use strict";

import React, {PropTypes, Component} from 'react';
import TodoItem from './TodoItem.js';
import {deleteTodo} from '../actions/todoActions.js';
import {updateTodo} from '../actions/todoActions.js';

class TodoList extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired
  };

  deleteHandler(todoItemId) {
    deleteTodo(todoItemId)
  }

  updateTodoHandler(todoItemId) {
    updateTodo(todoItemId);
  }

  render() {
    return (
        <div>
          <ul>{(this.props.todos || []).map((data, index) =>
              <TodoItem key={index}
                        deleteHandler={this.deleteHandler}
                        updateTodoHandler={this.updateTodoHandler}
                  {...data}
              />)}
          </ul>
          <hr /><pre>{JSON.stringify(this.props.todos, null, 2)}</pre>
        </div>
    );
  }
}

export default TodoList;