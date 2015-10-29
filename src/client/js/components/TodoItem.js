import React, {PropTypes, Component, ReactDOM} from 'react'

class TodoItem extends Component {
  static propTypes = {
    id: PropTypes.number,
    deleteHandler: PropTypes.func.isRequired,
    updateTodoHandler: PropTypes.func.isRequired,
    updateTodoStateHandler: PropTypes.func.isRequired,
    value: PropTypes.string
  };

  deleteHandler() {
    this.props.deleteHandler(this.props.id);
  }

  updateTodoHandler() {
    this.props.updateTodoHandler({
      value: this.refs.updateTodo.value,
      id: this.props.id
    });
  }

  updateTodoStateHandler() {
    this.props.updateTodoStateHandler({
      id: this.props.id,
      completed: !this.props.completed
    })
  }

  render() {
    return (
        <div>
          <li> <input defaultValue={this.props.value} ref="updateTodo"/>
            <button className="deleteBtn" onClick={::this.deleteHandler}> Delete </button>
            <button className="updateBtn" onClick={::this.updateTodoHandler}> Update </button>
            Completed <input className="completionStatus" type="checkbox" ref="updateCompletion" onChange={::this.updateTodoStateHandler}/>
          </li>
        </div>
    );
  }
}

export default TodoItem;