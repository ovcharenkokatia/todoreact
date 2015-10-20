"use strict";

import React, {Component} from 'react';
import TodoList from './TodoList.js';
import TodoInput from './TodoInput.js';

class Todo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todoItems: ['Item 1', 'Item 2', 'Item 3']
    };
    this._deleteTodo = this._deleteTodo.bind(this);
    this._saveTodo = this._saveTodo.bind(this);
  }

  render() {
    var { todoItems } = this.state;

    return (
        <div>
          <h3>My List</h3>
          <TodoList onDelete={this._deleteTodo} todos={todoItems}/>
          <TodoInput onSave={this._saveTodo} todos={todoItems}  />
        </div>
    );
  }

  _deleteTodo(todo, todos) {
    this.setState({
      todoItems: todos.filter(value => {
        return todo !== value;
      })
    })
  }

  _saveTodo(todo, todos) {
    this.setState({
      todoItems: todos.concat(todo)
    });
  }
}

export default Todo;

