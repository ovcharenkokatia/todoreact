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

let placesDescriptions = new GraphQLObjectType({
  name: 'placesDescriptions',
  description: 'places descriptions of different types',
  fields: () => ({
    id: globalIdField('placesDescriptions'),
    name: {
      type: GraphQLString
    },
    menu: {
      type: GraphQLString,
      fields: () => ({
        id: {
          type: GraphQLString
        },
        label: {
          type: GraphQLString
        },
        price: {
          type: GraphQLFloat
        }
      })
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
    menu: {
      type: GraphQLString
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

let mutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    createNewPlace: placeDescriptionMutation,
    test: test
  })
});

//schema
let foodSchema = new GraphQLSchema({
  query: queryType,
  mutation: mutationType
});

module.exports = foodSchema;