"use strict";

import AppDispatcher from '../dispatcher/dispatcher.js';
import {EDIT_TODO} from '../constants/actionTypes.js';
import {DELETE_TODO} from '../constants/actionTypes.js';
import {CREATE_TODO} from '../constants/actionTypes.js';

export function deleteTodo(todoItemId) {
  AppDispatcher.dispatch({
    actionType: DELETE_TODO,
    todoItemId
  });
}

export function createTodo (newTodo) {
  AppDispatcher.dispatch({
    actionType: CREATE_TODO,
    newTodo : newTodo
  });
}

export function updateTodo (todoItemId) {
  AppDispatcher.dispatch({
    actionType: EDIT_TODO,
    todoItemId
  });
}