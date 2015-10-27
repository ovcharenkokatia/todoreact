import TodoList from '../TodoList.js';
import ReactTestUtils from 'react-addons-test-utils';
import React, {ReactDOM} from 'react';

describe("TodoList", () => {
  let listComponent = ReactTestUtils.renderIntoDocument(
      <TodoList
          todos={[ {id: 2, value: "u9i8", completed: false} ]}
       />);

  it("should render one todo item by default", () => {
    expect(listComponent.props.todos.length).toBe(1)
  });
});