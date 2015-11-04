import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLFloat,
  GraphQLNonNull
} from 'graphql';

import {
  nodeDefinitions,
  connectionDefinitions,
  globalIdField,
  connectionArgs,
  fromGlobalId,
  connectionFromArray
} from 'graphql-relay';

import {
  getPlace,
  getFoodPlaceType,
  getFastFood,
  getRestaurant,
} from '../../foodPlacesData.js';

//interface
let {nodeInterface, nodeField} = nodeDefinitions(
  (globalId) => {
    let {type, id} = fromGlobalId(globalId);
    if (type === 'FoodPlaceType') {
      return getFoodPlaceType(id);
    } else if (type === 'Places') {
      return getPlace(id);
    } else {
      return null;
    }
  },
  (obj) => {
    return obj.places ? foodPlaceType : placesDescription;
  }
);

let placesDescriptions = new GraphQLObjectType({
  name: 'placesDescriptions',
  description: 'places descriptions of different types',
  fields: () => ({
    id: globalIdField('placesDescriptions'),
    name: {
      type: GraphQLString,
      description: 'The name of the ship.'
    },
    menu: {
      type: GraphQLString
    },
    location: {
      type: GraphQLString
    },
    contacts: {
      type: GraphQLString
    }
  }),
  interfaces: [nodeInterface]
});

let foodPlaceType = new GraphQLObjectType ({
  name: "foodPlaceType",
  fields: () => ({
    id: globalIdField('foodPlaceType'),
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The name of the place.'
    },
    places: {
      type: placeNamesConnection,
      description: "The names of the places of the selected type",
      args: connectionArgs,
      resolve: (place, args) => connectionFromArray(
        place.places.map((id) => getPlace(id)),
        args
      )
    }
  }),
  interfaces: [nodeInterface]
});

//connection
let {connectionType: placeNamesConnection} =
  connectionDefinitions(
    {
      name: 'placesDescriptions',
      nodeType: placesDescriptions
    }
  );

//query type
let queryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    fastFood: {
      type: foodPlaceType,
      resolve: () => getFastFood()
    },
    restaurants: {
      type: foodPlaceType,
      resolve: () => getRestaurant()
    },
    node: nodeField
  })
});

//schema
let foodSchema = new GraphQLSchema({
  query: queryType
});

module.exports = foodSchema;