import install from 'jasmine-es6/overrides/async';
install();

import foodSchema from '../graphql/schemas/foodSchema.js';
import { graphql } from 'graphql';

describe('Food places types have connection with descriptions of the places', () => {
  it('fetches the first place of the restaurants', async () => {
    let query = `
      query restaurantFisrtPlace {
        restaurants {
          name,
          places(first: 1) {
            edges {
              node {
                name
              }
            }
          }
        }
      }
    `;
    let expected = {
      restaurants: {
        name: 'Restaurants',
        places: {
          edges: [
            {
              node: {
                name: 'Felicita'
              }
            }
          ]
        }
      }
    };
    let result = await graphql(foodSchema, query);

    expect(result).toEqual({data: expected});
  });

  it('fetches the last place of the fast foods', async () => {
    let query = `
      query fastFoodLastPlace {
        fastFood {
          name,
          places(last: 1) {
            edges {
              node {
                name
              }
            }
          }
        }
      }
    `;
    let expected = {
      fastFood: {
        name: 'Fast food place',
        places: {
          edges: [
            {
              node: {
                name: 'KFC'
              }
            }
          ]
        }
      }
    };
    let result = await graphql(foodSchema, query);

    expect(result).toEqual({data: expected});
  });

  it('should return correct name of the fast food place type', async () => {
    let query = `
      query nameOfFastFoodPlaceType {
        fastFood {
          name
      }
    }
    `;
    let expected = {
          fastFood: {
            name: 'Fast food place'
        }
    };
    let result = await graphql(foodSchema, query);

    expect(result).toEqual({data: expected});
  });

  it('should return correct name of the restaurant place type', async () => {
    let query = `
      query nameOfRestaurantPlaceType {
        restaurants {
          name
      }
    }
    `;
    let expected = {
      restaurants: {
        name: 'Restaurants'
      }
    };
    let result = await graphql(foodSchema, query);

    expect(result).toEqual({data: expected});
  });

  it('should contain two places with names McDonalds and KFC', async () => {
    let query = `
      query fastFoodPlaces {
        fastFood {
          places {
            edges {
            node {
              name
              }
            }
         }
      }
    }
    `;

    let response = await graphql(foodSchema, query);
    let result = response.data.fastFood.places.edges;

    expect(result[0].node.name).toContain('McDonalds');
    expect(result[1].node.name).toContain('KFC');
  });

  it('should contain two places wuth names Coast and Felicita', async () => {
    let query = `
      query restaurantsPlaces {
        restaurants {
          places {
            edges {
            node {
              name
              }
            }
         }
      }
    }
    `;
    let response = await graphql(foodSchema, query);
    let result = response.data.restaurants.places.edges;

    expect(result[0].node.name).toContain('Felicita');
    expect(result[1].node.name).toContain('Coast');
  });

  it('should return correct restaurants descriptions', async () => {
    let query = `
      query restaurantsPlacesDescriptions {
        restaurants {
          places {
            edges {
            node {
              location,
              contacts
              }
            }
         }
      }
    }
    `;

    let expected = {
      restaurants: {
        places: {
          edges: [
            {
              node: {
                location: "i'm nearby Globa park",
                contacts: "880099"
              }
            },
            {
              node: {
                location: "you will find me between 20 porches",
                contacts: "458899"
              }
            }
          ]
        }
      }
    };

    let result = await graphql(foodSchema, query);

    expect(result).toEqual({data: expected});
  });

  it('should return correct fast foods descriptions', async () => {
    let query = `
      query fastFoodPlacesDescriptions {
        fastFood {
          places {
            edges {
            node {
              location,
              contacts
              }
            }
         }
      }
    }
    `;

    let expected = {
      fastFood: {
        places: {
          edges: [
            {
              node: {
                location: "youWillFindMeEverywhere",
                contacts: "990077"
              }
            },
            {
              node: {
                location: "nobody knows, cause we have Mac",
                contacts: "445566"
              }
            }
          ]
        }
      }
    };
    let result = await graphql(foodSchema, query);

    expect(result).toEqual({data: expected});
  });
});

