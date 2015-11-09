import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLFloat,
    GraphQLNonNull,
    GraphQLID
} from 'graphql';

import {
    nodeDefinitions,
    connectionDefinitions,
    globalIdField,
    connectionArgs,
    fromGlobalId,
    connectionFromArray,
    mutationWithClientMutationId
} from 'graphql-relay';

import {
    createPlaceDescription,
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
      } else if (type === 'placesDescriptions') {
        return getPlace(id);
      } else {
        return null;
      }
    },
    (obj) => {
      return obj.places ? foodPlaceType : placesDescriptions;
    }
);

let itemType = new GraphQLObjectType({
  name: "menuType",
  fields: () => ({
    label: {
      type: GraphQLString
    },
    price: {
      type: GraphQLFloat
    }
  })
});

let placesDescriptions = new GraphQLObjectType({
  name: 'placesDescriptions',
  description: 'places descriptions of different types',

  fields: () => ({
    id: globalIdField('placesDescriptions'),
    name: {
      type: GraphQLString
    },
    menuViewer: {
      type: new GraphQLList(itemType),
      resolve(place) {
        let array = place.menu.map((item) => {
          return {
            label: item.label,
            price: item.price
          }
        });
        return array;
      }
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

let foodPlaceType = new GraphQLObjectType({
  name: "foodPlaceType",
  fields: () => ({
    id: globalIdField('foodPlaceType'),
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The type of the food place.'
    },
    places: {
      type: placesDescriptionsConnection,
      description: "Descriptions of the places",
      args: connectionArgs,
      resolve: (placeType, args) => {
        return connectionFromArray(
            placeType.places.map((id) => getPlace(id)),
            args
        )
      }
    }
  }),
  interfaces: [nodeInterface]
});

//connection
let {connectionType: placesDescriptionsConnection} =
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

let test = mutationWithClientMutationId({
  name: 'test',
  inputFields: {
    value: {
      type: GraphQLString
    }
  },
  outputFields: {
    newValue: {
      type: GraphQLString,
      resolve() {
        return 'aaaa'
      }
    }
  },
  mutateAndGetPayload: ({}) => {
    return {
      value: 'asdasd'
    };
  }
});

  let placeDescriptionMutation = mutationWithClientMutationId({
  name: "placeDescriptionCreation",
  inputFields: {
    name: {
      type: new GraphQLNonNull(GraphQLString)
    },
    location: {
      type: GraphQLString
    },
    contacts: {
      type: GraphQLString
    },
    typeId: {
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  outputFields: {
    placeDescription: {
      type: placesDescriptions,
      resolve: (payload) => getPlace(payload.placeId)
    },
    foodPlace: {
      type: foodPlaceType,
      resolve: (payload) => getFoodPlaceType(payload.placeTypeId)
    }
  },
  mutateAndGetPayload: ({name, menu, location, contacts, typeId}) => {
    let newPlaceDescription = createPlaceDescription(name, menu, location, contacts, typeId);
    return {
      placeId : newPlaceDescription.id,
      placeTypeId: typeId
    }
  }
});

let createMenuItemMutation = mutationWithClientMutationId({
  name: "createMenuItem",
  inputFields: {
    placeId: {
      type: new GraphQLNonNull(GraphQLString)
    },
    label: {
      type: GraphQLString
    },
    price: {
      type: GraphQLFloat
    }
  },
  outputFields: {
    menuItem: {
      type: itemType,
      resolve: (payload) => getPlace(payload.placeId)
    }
  },
  mutateAndGetPayload: ({menuItem}) => {
    let newMenuItem = createMenuItem(menuItem);
    console.log(menuItem);
    return {
      placeId: newMenuItem.id
    };
  }
});

let mutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    createNewPlace: placeDescriptionMutation,
    createMenuItem: createMenuItemMutation,
    test: test
  })
});

//schema
let foodSchema = new GraphQLSchema({
  query: queryType,
  mutation: mutationType
});

module.exports = foodSchema;