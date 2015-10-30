import data from './../data.json';
import todo from './fields/todoItem.js';
import todoList from './fields/todoList.js';

import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLBoolean,
    GraphQLList
} from 'graphql';

let schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      todoList: {
        type: todoList,
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

      todo: {
        type: todo,
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

export default schema;