"use strict";

import AppDispatcher from '../dispatcher/dispatcher.js';
import {DELETE_TODO} from '../constants/actionTypes.js';
import {CREATE_TODO} from '../constants/actionTypes.js';
import {EDIT_TODO} from '../constants/actionTypes.js';
import {GET_TODO_BY_ID} from '../constants/actionTypes.js';
import {EventEmitter} from 'events';

const CHANGE_EVENT = 'change';

let todoArray = [
  {
    id: 1,
    value: 'Test',
    completed: false
  }
];

let todo = {};
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
      value: newTodo,
      completed: false
    };
    todoArray.push(itemForArray);
    let valueForSaving = itemForArray.value.toString();
    let complitionForSaving = itemForArray.completed.toString();

    localStorage.setItem([id],[valueForSaving, complitionForSaving]);
    this.emit(CHANGE_EVENT);
  }

  updateTodo(newTodo) {
    if (newTodo.id) {
      for (let i = 0; i < todoArray.length; i++) {
        if (newTodo.id == todoArray[i].id) {
          todoArray[i].value = newTodo.value;
          todoArray[i].completed = newTodo.completed;
          this.emit(CHANGE_EVENT);
        }
      }
    }
  }

  getTodo() {
    return todo;
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
    case EDIT_TODO:
      todoStore.updateTodo(action.todoItemId);
      break;
  }
}));

export default todoStore;