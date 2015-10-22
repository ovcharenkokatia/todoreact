import React, {PropTypes, Component} from 'react'

class TodoItem extends Component {
  static propTypes = {
    deleteHandler: PropTypes.func.isRequired,
    id: PropTypes.number,
    value: PropTypes.string
  };

  deleteHandler() {
    this.props.deleteHandler(this.props.id);
  }

  render() {
    return (
        <div>
          <li onClick={::this.deleteHandler}>{this.props.value}</li>
        </div>
    );
  }
}

export default TodoItem;