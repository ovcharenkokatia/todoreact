"use strict";

import React, {PropTypes, Component} from 'react';
import TodoItem from './TodoItem.js';
import {deleteTodo} from '../actions/todoActions.js';

class TodoList extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired
  };

  deleteHandler(todoItemId) {
    deleteTodo(todoItemId)
  }

  render() {
    return (
        <div>
          <ul>{(this.props.todos || []).map((data, index) =>
              <TodoItem key={index} deleteHandler={this.deleteHandler}
                  {...data}
              />)}
          </ul>
        </div>
    );
  }
}

export default TodoList;