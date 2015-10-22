"use strict";

import AppDispatcher from '../dispatcher/dispatcher.js';
import {DELETE_TODO} from '../constants/actionTypes.js';
import {CREATE_TODO} from '../constants/actionTypes.js';
import {EventEmitter} from 'events';

const CHANGE_EVENT = 'change';

let todoArray = [
  {
    id: 1,
    value: 'Test'
  }
];
let idGenerator = 2;

class TodoStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(cb) {
    this.removeListener(CHANGE_EVENT, cb);
  }

  deleteTodo(todoItemId) {
    todoArray = todoArray.filter(item => item.id !== todoItemId);

    this.emit(CHANGE_EVENT);
  }

  createTodo(newTodo) {
    let id = idGenerator++;
    let itemForArray = {
      id: id,
      value: newTodo
    };
    todoArray.push(itemForArray);

    this.emit(CHANGE_EVENT);
  }

  getTodos() {
    return todoArray;
  }
}

const todoStore = new TodoStore();

AppDispatcher.register((action => {
  switch(action.actionType) {
    case DELETE_TODO:
      todoStore.deleteTodo(action.todoItemId);
      break;
    case CREATE_TODO:
      todoStore.createTodo(action.newTodo);
      break;
  }
}));

export default todoStore;