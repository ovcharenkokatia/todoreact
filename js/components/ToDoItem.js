import React, {Component} from 'react';

import InitializeAction from './../actions/initAction.js';
import TodoActions from './../actions/todoActions.js';

let headerStyle = {
  "textAlign": "center"
};

//
//class ToDoItem extends Component {
//
//}

let ToDoItem = React.createClass({
  render() {
    //var value = this.state.value;
    return (<div style={headerStyle}>
      <input type="text" ref="input" onChange={this.handleChange}/>
      <button type="button" onClick={this.createTodo}> Add</button>
    </div>);
  },

  createTodo: function () {
    let value = React.findDOMNode(this.refs.input).value;
    console.log(value);

    //TodoActions.createTodo(newTodo);
  },

  handleChange: function (event) {
    console.log(event.target.value);
    this.setState({value: event.target.value});
  }
});

export default ToDoItem;