"use strict";

import AppDispatcher from '../doesntWorkNow/dispatcher/dispatcher.js';
import ActionTypes from '../../constants/actionTypes.js';
import FluxStore from './FluxStore';

const CHANGE_EVENT = 'change';

let todoArray = [],
    appState;

function reset() {
  appState = {};
}

class todoStore extends FluxStore {
  constructor() {
    super();
  }

  getState() {
    return appState;
  }
}

let todoStoreInstance = new todoStore();

todoStoreInstance.dispatchToken = AppDispatcher.register(action =>  {
  switch(action.type) {
    case ActionTypes.CREATE_TODO:
      reset();
  }
});

  //addChangeListener (callback) {
  //  this.on(CHANGE_EVENT, callback);
  //}
  //
  //removeChangeListener (callback) {
  //  this.removeListener(CHANGE_EVENT, callback);
  //}
  //
  //emitChange () {
  //  this.emit(CHANGE_EVENT);
  //}

  //getAllTodos () {
  //  return todoArray;
  //}
//};
//
//is called every time every action is dispatched.
// every registered store is notified with every single action

//AppDispatcher.register(function (action) {
//  switch (action.actionType) {
//    case ActionTypes.INITIALIZE:
//      todoArray = action.initialData.todos;
//      todoStore.emitChange();
//      break;
//    case ActionTypes.CREATE_TODO:
//      todoArray.push(action.todo);
//      todoStore.emitChange();
//      break;
//
//    default:
//      console.log('unexpected action type');
//  }
//});
//
//module.exports = todoStore;

