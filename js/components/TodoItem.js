import React, {PropTypes, Component} from 'react'

class TodoItem extends Component {
  static propTypes = {
    deleteHandler: PropTypes.func.isRequired,
    id: PropTypes.number,
    value: PropTypes.string,
    completed: PropTypes.boolean
  };

  state = {
    value: this.props.value,
    completed: this.props.completed
  };

  deleteHandler() {
    this.props.deleteHandler(this.props.id);
  }

  updateTodoHandler() {
    this.setState({
      value: React.findDOMNode(this.refs.updateTodo).value,
      id: this.props.id
    });

    React.findDOMNode(this.refs.updateCompletion).checked ? this.state.completed = true : this.state.completed = false;

    this.state.value = this.refs.updateTodo.value;
    this.props.updateTodoHandler(this.state);
  }

  render() {
    return (
        <div>
          <li> <input defaultValue = {this.props.value} ref = "updateTodo"/>
            <button className="deleteBtn" onClick={::this.deleteHandler}> Delete </button>
            <button className="updateBtn" onClick={::this.updateTodoHandler}> Update </button>
            Completed <input className="completionStatus" type="checkbox" ref="updateCompletion" onClick={::this.updateTodoHandler}/>
          </li>
        </div>
    );
  }
}

export default TodoItem;