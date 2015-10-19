import React from 'react';

import ToDoItem from './ToDoItem';

let ToDoList = React.createClass({

  // after changing "this.props", the render method should be called again and we have sth new on the screen

  render: function () {
    return (
        <div className="toDoItem">
          <ul>
            <li><ToDoItem /></li>
          </ul>
        </div>
    )
  }
});

export default ToDoList;