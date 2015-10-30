import {GraphQLList} from 'graphql';

import Todo from './todoItem.js';

let TodoList = new GraphQLList (Todo);

export default TodoList;
