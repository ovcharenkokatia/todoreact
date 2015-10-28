import AppDispatcher from '../../dispatcher/dispatcher.js';
import TodoStore from '../../stores/todoStore.js';


//this.UserStore = require("user_store");
//this.registeredCallback = MyDispatcher.register.calls.mostRecent().args[0];


describe("TodoStore", function () {
  //let dispatcher, store;

  beforeEach(() => {
    //dispatcher = new AppDispatcher();
    store = new TodoStore();
  });

  it("adds a todo", function () {
      dispatcher.dispatch({
        actionType: "CREATE_TODO",
        newTodo : {id: 2, value: "pLi8"}
      });
    });

  expect(TodoStore.createTodo()).toHaveBeenCalled();

    afterEach(() => {
      AppDispatcher.dispatch({
        actionType: "DELETE_TODO",
        newTodo : {id: 2, value: "pLi8"}
      });
    });
});
