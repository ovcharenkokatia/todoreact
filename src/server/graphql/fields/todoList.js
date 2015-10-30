import {GraphQLList} from 'graphql';

import todo from './todoItem.js';

let todoList = new GraphQLList (todo);

export default todoList;
