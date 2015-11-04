//places
let mac = {
  id: 1,
  name: "McDonalds",
  menu:  [
    {
      id: 1,
      label: 'burger',
      price: '30'
    },
    {
      id: 2,
      label: 'potato',
      price: '20'
    }
  ],
  location: "youWillFindMeEverywhere",
  contacts: "990077"
};

let felicita = {
  id: 2,
  name: "Felicita",
  menu: [
    {
      id: 1,
      label: 'pizza',
      price: '30'
    },
    {
      id: 2,
      label: 'pasta',
      price: '20'
    }
  ],
  location: "i'm nearby Globa park",
  contacts: "880099"
};

let coast = {
  id: 3,
  name: "Coast",
  menu: [
    {
      id: 1,
      label: 'ice-cream',
      price: '30'
    },
    {
      id: 2,
      label: 'coffee',
      price: '20'
    }
  ],
  location: "you will find me between 20 porches",
  contacts: "458899"
};

let kfc = {
  id: 4,
  name: "KFC",
  menu: [
    {
      id: 1,
      label: 'chicken-burger',
      price: '30'
    },
    {
      id: 2,
      label: 'double chicken-burger with chicken',
      price: '20'
    }
  ],
  location: "nobody knows, cause we have Mac",
  contacts: "445566"
};

let fastFood = {
  id: 1,
  name: "Fast food place",
  places: [1, 4]
};

let restaurants = {
  id: 2,
  name: "Restaurants",
  places: [2, 3]
};

let data = {
  FoodPlaceTypes: {
    1: fastFood,
    2: restaurants
  },
  Places: {
    1: "mac",
    2: "felicita",
    3: "coast",
    4: "kfc"
  }
};

export function getPlace(id) {
  return data.Places[id];
}
export function getFoodPlaceType(id) {
  return data.FoodPlaceTypes[id];
}
export function getFastFood() {
  return fastFood;
}
export function getRestaurant() {
  return restaurants;
}