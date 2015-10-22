import React, {PropTypes, Component} from 'react'

class TodoItem extends Component {
  static propTypes = {
    deleteHandler: PropTypes.func.isRequired,
    id: PropTypes.number,
    value: PropTypes.string,
    taskCompletion: PropTypes.boolean
  };

  deleteHandler() {
    this.props.deleteHandler(this.props.id);
  }

  updateTodoHandler() {
    this.props.value = React.findDOMNode(this.refs.updateTodo).value;
    React.findDOMNode(this.refs.updateCompletion).checked ? this.props.completed = true : this.props.completed = false;

    this.state = this.props.value;
    this.props.updateTodoHandler(this.props);
  }

  render() {
    return (
        <div>
          <li> <input disabled={!this.state} defaultValue = {this.props.value} ref = "updateTodo"/>
            <button onClick={::this.deleteHandler}> Delete </button>
            <button onClick={::this.updateTodoHandler}> Update </button>
            Completed <input type="checkbox" ref="updateCompletion" onClick={::this.updateTodoHandler}/>
          </li>
        </div>
    );
  }
}

export default TodoItem;



//className={this.state.is ? '' : ''} disabled="disabled" //to change class
//<button onClick={::this.getTodoByIdHandler}>Edit </button>