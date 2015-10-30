import {
    GraphQLString,
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLBoolean,
    GraphQLList
} from 'graphql';

let todo = new GraphQLObjectType({
  name: "todo",
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

export default todo;