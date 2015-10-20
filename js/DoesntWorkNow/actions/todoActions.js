"use strict";

import AppDispatcher from '../doesntWorkNow/dispatcher/dispatcher.js';
import ActionTypes from './actionTypes.js';

var TodoActions = {
//doesn't work now

  todos : [],

  createTodo: function(todo) {
    console.log("todo is: ");
    console.log(todo);
      var newToDo = this.todos.push(todo);

      AppDispatcher.dispatch({
          actionType: ActionTypes.CREATE_TODO,
          todo: newToDo
      });
  }
};

export default TodoActions;