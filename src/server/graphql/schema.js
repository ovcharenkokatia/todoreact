import data from './../data.json';
import Todo from './fields/todoItem.js';
import TodoList from './fields/todoList.js';

import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLBoolean,
    GraphQLList
} from 'graphql';

let Schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      TodoList: {
        type: TodoList,
        itemType: GraphQLObjectType,
        resolve: function () {
          return [{
            id: 7,
            value: "oPp",
            completed: false
          },
            {
              id: 8,
              value: "oPp",
              completed: false
            }];
        }
      },

      Todo: {
        type: Todo,
        args: {
          id: {
            type: GraphQLString
          }
        },
        resolve: function (_, args) {
          return data[args.id];
        }
      }
    }
  })
});

export default Schema;