"use strict";

import React, {Component} from 'react';
import TodoList from './TodoList.js';
import TodoInput from './TodoInput.js';
import TodoStore from '../stores/todoStore.js';

class Todo extends Component {
  state = {
    todoItems: []
  };

  componentDidMount() {
    TodoStore.addChangeListener(::this.onTodosChange);
    this.setTodos();
  }

  onTodosChange() {
    this.setTodos();
  }

  setTodos() {
    this.setState({
      todoItems: TodoStore.getTodos()
    });
  }

  render() {
    return (
        <div>
          <h3>My List</h3>
          <TodoList todos={this.state.todoItems} />
          <TodoInput />
        </div>
    );
  }
}

export default Todo;

