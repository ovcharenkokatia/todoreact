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
  getMenu,
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
    } else if (type === "Menus") {
      return getMenu(id);
    } else {
      return null;
    }
  },
  (obj) => {
    let result;

    if (obj.places) {
      result = foodPlaceType
    } else if (obj.price) {
      result = menuType
    } else {
      result = placesNames
    }
    return result;
  }
);

//types
let menuType = new GraphQLObjectType({
  name: 'Menus',
  fields: () => ({
    id: globalIdField('Menus'),
    label: {
      type: GraphQLString
    },
    price: {
      type: GraphQLFloat
    }
  }),
  resolve: (menu, args) => connectionFromArray(
    menu.menu.map((id) => getMenu(id)),
    args
  )
});

let placesNames = new GraphQLObjectType({
  name: 'placesNames',
  description: 'places descriptions of different types',
  fields: () => ({
    id: globalIdField('placesNames'),
    name: {
      type: GraphQLString,
      description: 'The name of the ship.'
    },
    menu: {
      type: menuConnection,
      args: connectionArgs,
      resolve: (menu, args) => connectionFromArray(
        menu.menu.map((id) => getMenu(id)),
        args
      )
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

//connections
let {connectionType: menuConnection} =
  connectionDefinitions({name: 'placeMenu', nodeType: menuType});

let {connectionType: placeTypeConnection} =
  connectionDefinitions({name: 'placeType', nodeType: foodPlaceType});

let {connectionType: placeNamesConnection} =
  connectionDefinitions({name: 'placeNames', nodeType: placesNames});

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

