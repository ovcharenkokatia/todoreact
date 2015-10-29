import data from './data.json';
import {
GraphQLInt,
GraphQLFloat,
GraphQLString,
GraphQLObjectType,
GraphQLEnumType,
GraphQLNonNull,
GraphQLSchema,
GraphQLBoolean,
GraphQLList
} from 'graphql';


let todoType = new GraphQLObjectType({
  name: "todo",
  description: "This represent a todo",
  fields: () => ({
    id: {type: new GraphQLNonNull(GraphQLString)},
    value: {type: GraphQLString},
    completed: {type: GraphQLBoolean}
  })
});

let schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      todo: {
        type: todoType,
        args: {
          id: { type: GraphQLString }
        },
        resolve: function (_, args) {
          return data[args.id];
        }
      }
    }
  })
});

export default schema;