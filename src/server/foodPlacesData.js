//places
let mac = {
  id: 1,
  name: "McDonalds",
  menu: 1,
  location: "youWillFindMeEverywhere",
  contacts: "990077"
};

let macMenu = [
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
];

let felicita = {
  id: 2,
  name: "Felicita",
  menu: 2,
  location: "i'm nearby Globa park",
  contacts: "880099"
};

let felicitaMenu = [
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
];

let coast = {
  id: 3,
  name: "Coast",
  menu: 3,
  location: "you will find me between 20 porches",
  contacts: "458899"
};

let coastMenu = [
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
];

let kfc = {
  id: 4,
  name: "KFC",
  menu: 4,
  location: "nobody knows, cause we have Mac",
  contacts: "445566"
};

let KFCMenu = [
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
];

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
  },
  Menus: {
    1: "macMenu",
    2: "felicitaMenu",
    3: "coastMenu" ,
    4: "KFCMenu"
  }
};

export function getPlace(id) {
  return data.Places[id];
}
export function getMenu(id) {
  return data.Menus(id)
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