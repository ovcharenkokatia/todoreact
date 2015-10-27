import Todo from '../Todo.js';
import ReactTestUtils from 'react-addons-test-utils';
import React, {ReactDOM} from 'react';
import TodoStore from '../../stores/todoStore.js';

describe("Todo", () => {
  it('it should set todo correctly due to changes in store', () => {
    let todoComponent = ReactTestUtils.renderIntoDocument(<Todo />);

    spyOn(Todo.prototype, 'setTodos');

    TodoStore.createTodo({id: 3, value: "k9I0", completed: true});

    let todoItemsLength = todoComponent.state.todoItems.length;
    expect(todoComponent.setTodos).toHaveBeenCalled();
    expect(todoItemsLength).toEqual(3)
  })
});