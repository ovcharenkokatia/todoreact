import TodoItem from '../TodoItem.js';
import ReactTestUtils from 'react-addons-test-utils';
import React, {ReactDOM} from 'react';
import TodoStore from '../../stores/todoStore.js';

describe("TodoItem", () => {
  let itemComponent = null;
  let deleteButton, deleteHandler, updateButton, updateTodoHandler, completionStatus;

  beforeEach(() => {
    deleteHandler = jasmine.createSpy('deleteHandler');
    updateTodoHandler = jasmine.createSpy('updateTodoHandler');

    itemComponent = ReactTestUtils.renderIntoDocument(
        <TodoItem id={1}
                  value={"Tests"}
                  deleteHandler={deleteHandler}
                  updateTodoHandler={updateTodoHandler}
                  completed={true}
        />
    );
    deleteButton = ReactTestUtils.findRenderedDOMComponentWithClass(itemComponent, 'deleteBtn');
    updateButton = ReactTestUtils.findRenderedDOMComponentWithClass(itemComponent, 'updateBtn');
    completionStatus = ReactTestUtils.findRenderedDOMComponentWithClass(itemComponent, 'completionStatus', {checked: false});
  });


  it('should render the parts of the component correctly', () => {
    expect(ReactTestUtils.scryRenderedDOMComponentsWithTag(itemComponent, 'button').length).toBe(2);
    expect(ReactTestUtils.scryRenderedDOMComponentsWithTag(itemComponent, 'input').length).toBe(2);
    expect(ReactTestUtils.scryRenderedDOMComponentsWithTag(itemComponent, 'li').length).toBe(1);
    expect(ReactTestUtils.scryRenderedDOMComponentsWithTag(itemComponent, 'div').length).toBe(1);
  });

  it('should call the deleteHandler with id=1', ()=> {
    ReactTestUtils.Simulate.click(deleteButton);

    expect(deleteHandler).toHaveBeenCalledWith(1);
  });

  it('should call the update method and change the component value in state', ()=> {
    itemComponent = ReactTestUtils.renderIntoDocument(
        <TodoItem id={1}
                  value={"Tests05"}
        />
    );

    ReactTestUtils.Simulate.click(updateButton);

    expect(updateTodoHandler).toHaveBeenCalled();
    expect(itemComponent.state.value).toBe("Tests05")
  });

  it("should the completed option in state", ()=> {
    ReactTestUtils.Simulate.click(completionStatus);

    expect(itemComponent.state.completed).toBe(false);
  })
});