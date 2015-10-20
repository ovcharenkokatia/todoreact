"use strict";

import React, {Component} from 'react';

class TodoList extends React.Component {

  // es7 example
  //test(){
  //     console.log(this);
  //}

  render() {
    var { todos, onDelete } = this.props;
    var rows = todos.map((value, index) => {
      return (
          <li key={index}
          onClick={onDelete.bind(null, value, todos)}>Todo {value}
          </li>);

      // es7 example
      //<li key={index}
      //    onClick={::this.test}>Todo {value}
      //</li>);
    });

    return (
        <ul>{rows}</ul>
    );
  }
}

export default TodoList;