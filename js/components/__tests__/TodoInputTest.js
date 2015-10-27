import TodoInput from '../TodoInput.js';
import ReactTestUtils from 'react-addons-test-utils';
import React, {ReactDOM} from 'react';
import TodoStore from '../../stores/todoStore.js';

describe("TodoInput", ()=> {
  let component = ReactTestUtils.renderIntoDocument(<TodoInput />);
  let addButton = ReactTestUtils.findRenderedDOMComponentWithTag(component, 'button');

  it("should render one button and one input", () => {
    expect(ReactTestUtils.scryRenderedDOMComponentsWithTag(component, 'input').length).toBe(1);
    expect(ReactTestUtils.scryRenderedDOMComponentsWithTag(component, 'button').length).toBe(1);
  });

  it('should call create handler function', () => {
    spyOn(TodoInput.prototype, 'createHandler');

    expect(TodoStore.getTodos().length).toBe(1);

    ReactTestUtils.Simulate.click(addButton);

    expect(component.createHandler).not.toHaveBeenCalled();
  });
});