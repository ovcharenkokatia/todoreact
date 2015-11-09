//places
let mac = {
  id: '1',
  name: "McDonalds",
  menu:  [
    {
      id: '1',
      label: 'burger',
      price: 30.1
    },
    {
      id: '2',
      label: 'potato',
      price: 30.1
    }
  ],
  location: "youWillFindMeEverywhere",
  contacts: "990077"
};

let felicita = {
  id: '2',
  name: "Felicita",
  menu: [
    {
      id: '1',
      label: 'pizza',
      price: 30.1
    },
    {
      id: '2',
      label: 'pasta',
      price: 20.0
    }
  ],
  location: "i'm nearby Globa park",
  contacts: "880099"
};

let coast = {
  id: '3',
  name: "Coast",
  menu: [
    {
      id: '1',
      label: 'ice-cream',
      price: 25.2
    },
    {
      id: '2',
      label: 'coffee',
      price: 25.2
    }
  ],
  location: "you will find me between 20 porches",
  contacts: "458899"
};

let kfc = {
  id: '4',
  name: "KFC",
  menu: [
    {
      id: '1',
      label: 'chicken-burger',
      price: 25.1
    },
    {
      id: '2',
      label: 'double chicken-burger with chicken',
      price: 25.1
    }
  ],
  location: "nobody knows, cause we have Mac",
  contacts: "445566"
};

let fastFood = {
  id: '1',
  name: "Fast food place",
  places: ['1', '4']
};

let restaurants = {
  id: '2',
  name: "Restaurants",
  places: ['2', '3']
};

let data = {
  FoodPlaceTypes: {
    1: fastFood,
    2: restaurants
  },
  Places: {
    1: mac,
    2: felicita,
    3: coast,
    4: kfc
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

let startId = 5;
let startMenuId = 3;

export function createPlaceDescription(placeName, foodPlaceTypeId) {
  let newPlaceDescription = {
    id: '' + (startId++),
    name: placeName
  };
  data.Places[newPlaceDescription.id] = newPlaceDescription;
  data.FoodPlaceTypes[foodPlaceTypeId].places.push(newPlaceDescription.id);
  return newPlaceDescription;
}

export function createMenuItem(newMenuItem) {
  console.log(newMenuItem);

  let newMenuItem = {
    id: '' + (startMenuId++),
    label: newMenuItem.itemLabel,
    price: newMenuItem.itemPrice
  };

  data.Places.placeDescription[id].menu.push(newMenuItem);
}