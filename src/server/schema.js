import TodoList from './../client/js/components/TodoList.js';
import {
    GraphQLInt,
    GraphQLFloat,
    GraphQLString,
    GraphQLList,
    GraphQLObjectType,
    GraphQLEnumType,
    GraphQLNonNull,
    GraphQLSchema,
    GraphQLBoolean
} from 'graphql';

const Todo = new GraphQLObjectType({
  name: "Todo",
  description: "This represent a todo",
  fields: () => ({
    _id: {type: new GraphQLNonNull(GraphQLString)},
    value: {type: GraphQLString},
    completed: {type: GraphQLBoolean}
  })
});

const Query = new GraphQLObjectType({
  name: "Query",
  fields: () => ({
    viewer: {
      type: Todo,
      resolve() {
        return {
          id: 1
        }
      }
    }
  })
});

const Schema = new GraphQLSchema({
  query: Query
});

export default Schema;