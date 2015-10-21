"use strict";

import AppDispatcher from '../dispatcher/dispatcher.js';
import {CREATE_TODO} from '../constants/actionTypes.js';

let TodoActions = {

  //todos : [],

  createTodo: function(todo) {
      //var newToDo = this.todos.push(todo);

    //HERE DISPATCHER TELLS ALL STORES THAT THE NEWTODO WAS JUST CREATED
      AppDispatcher.dispatch({
          actionType: ActionTypes.CREATE_TODO,
          todo: todo
      });
  }
};

export default TodoActions;