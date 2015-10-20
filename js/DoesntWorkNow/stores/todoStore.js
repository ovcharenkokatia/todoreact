"use strict";

import AppDispatcher from '../doesntWorkNow/dispatcher/dispatcher.js';
import ActionTypes from '../actions/actionTypes.js';
import objectAssign from 'object-assign';
import EventEmitter from 'event';

//const CHANGE_EVENT = 'change';
//
//var todoArray = [];
//
//var todoStore = objectAssign({}, EventEmitter.prototype, {
//  addChangeListener: function (callback) {
//    this.on(CHANGE_EVENT, callback);
//  },
//
//  removeChangeListener: function (callback) {
//    this.removeListener(CHANGE_EVENT, callback);
//  },
//
//  emitChange: function () {
//    this.emit(CHANGE_EVENT);
//  },
//
//  getAllTodos: function () {
//    return todoArray;
//  }
//});
//
//AppDispatcher.register(function (action) {
//  switch (action.actionType) {
//    case ActionTypes.INITIALIZE:
//      console.log('initialize todo type');
//      todoArray = action.initialData.todos;
//      todoStore.emitChange();
//      break;
//    case ActionTypes.CREATE_TODO:
//      console.log('create todo type');
//      todoArray.push(action.todo);
//      todoStore.emitChange();
//      break;
//
//    default:
//      console.log('unexpected action type');
//  }
//});

module.exports = todoStore;

