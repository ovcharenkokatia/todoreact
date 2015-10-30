import {
    GraphQLString,
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLBoolean,
    GraphQLList
} from 'graphql';

let Todo = new GraphQLObjectType({
  name: "Todo",
  description: "This represent a todo",
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLString)
    },
    value: {
      type: GraphQLString
    },
    completed: {
      type: GraphQLBoolean
    }
  })
});

export default Todo;