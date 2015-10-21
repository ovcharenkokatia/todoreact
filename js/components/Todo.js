"use strict";

import React, {Component} from 'react';
import TodoList from './TodoList.js';
import TodoInput from './TodoInput.js';
import TodoActions from '../actions/todoActions.js'


//import "./Todo.css";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItems: ['Item 1', 'Item 2', 'Item 3']
    };
  }

  render() {
    let { todoItems } = this.state;

    return (
        <div>
          <h3>My List</h3>
          <TodoList onDelete={::this._deleteTodo} todos={todoItems}/>
          <TodoInput onSave={::this._saveTodo} todos={todoItems}  />
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

  _saveTodo (event, newTodo) {
    TodoActions.createTodo(this.state.todo);
    console.log(event11);

}

  //_saveTodo(todo, todos) {
  //  this.setState({
  //    todoItems: todos.concat(todo)
  //  });
  //}
}

export default Todo;

