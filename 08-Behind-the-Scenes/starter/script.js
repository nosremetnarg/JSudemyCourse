// 'use strict';

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },

//   orderDelivery: function ({
//     starterIndex = 1,
//     mainIndex = 0,
//     time = '20:00',
//     address,
//   }) {
//     // console.log(`Order received!
//     // ${this.starterMenu[starterIndex]} and
//     // ${this.mainMenu[mainIndex]} will be delivered to
//     // ${address} at
//     // ${time}`);
//   },

//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(
//       `here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
//     );
//   },

//   orderPizza: function(mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient, otherIngredients);
//   }
// };

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: 'Via del Sole, 21',
//   starterIndex: 3,
// });

// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// // nullish: null or undefined
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

// // // destructoring
// // const arr = [1, 2, ...[3, 4]];
// // const [a, b, ...others] = [1, 2, 3, 4, 5];
// // console.log(a, b, others);

// // const [pizza, , risotto, ...otherFood] = [
// //   ...restaurant.mainMenu,
// //   ...restaurant.starterMenu,
// // ];
// // console.log(pizza, risotto, otherFood);

// // // Objects
// // const { sat, ...weekDays } = restaurant.openingHours;
// // console.log(weekDays);

// // // functions
// // const add = function (...numbers) {
// //   // rest syntax
// //   console.log(numbers);
// // let sum = 0;;
// // for (let i = 0; i < numbers.length; i++)
// //  sum += numbers[i]
// //   console.log(sum);

// // };
// // add(2, 3);
// // add(5, 3, 4, 2, 3);
// // add(3, 5, 6, 7, 8, 8, 5, 7);

// // const x = [23,5,7]
// // add(...x)

// // restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
// // restaurant.orderPizza('mushrooms')

// // console.log('==================== OR ==================');
// // // short-circuiting
// // console.log( 3 || 'Grant' );
// // console.log("" || "Grant");
// // console.log( true || 0);
// // console.log(undefined || null);

// // console.log(undefined || 0 || '' || 'hello' || 23 || null);

// // restaurant.numGuests = 0;
// // const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// // console.log(guests1);

// // const guests2 = restaurant.numGuests || 10;
// // console.log(guests2);

// // console.log('================= AND =====================');

// // console.log(0 && 'Grant');
// // console.log(7 && 'Grant');

// // console.log('hello' && 23 && null && 'Grant');
// // if (restaurant.orderPizza) {
// //   restaurant.orderPizza('mushroom', 'spinach')
// // }

// // restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach')

// // // const arr = [7, 8, 9];
// // // const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// // // console.log(badNewArr);

// // // Spread operator
// // // const newArr = [1, 2, ...arr];
// // // console.log(newArr);

// // // console.log(...newArr);

// // const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// // // console.log(newMenu);

// // // Copy Array
// // const mainMenuCopy = [...restaurant.mainMenu];

// // // Join 2 arrays
// // const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// // // console.log(`here is our main menu: ${menu}`);
// // // console.log(menu);

// // // Iterables are arrays, strings, maps, sets...not OBJECTS
// // const str = 'Grant';
// // const letters = [...str, ' ', 'S.'];
// // // console.log(letters);
// // // console.log(...str);

// // // real world example
// // const ingredients = [
// //   //   prompt("Let's make pasta! Ingredient 1?"),
// //   //   prompt("Let's make pasta! Ingredient 2?"),
// //   //   prompt("Let's make pasta! Ingredient 3?"),
// // ];
// // // console.log(ingredients);
// // restaurant.orderPasta(...ingredients);

// // // Objects
// // const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Steve' };
// // // console.log(newRestaurant);

// // const restaurantCopy = { ...restaurant };
// // restaurantCopy.name = 'Ristorante Roma';
// // console.log(restaurantCopy.name);
// // console.log(restaurant.name);

// // Object destructoring
// // const { name, openingHours, categories } = restaurant;
// // console.log(name, openingHours, categories);

// // const {
// //   name: restaurantName,
// //   openingHours: hours,
// //   categories: tags,
// // } = restaurant;
// // console.log(restaurantName, hours, tags);

// // default values
// // const { menu = [], starterMenu: starters = [] } = restaurant;
// // console.log(menu, starters);

// // mutating variables
// // let a = 111;
// // let b = 999;
// // const obj = { a: 23, b: 7, c: 14 };

// // ({ a, b } = obj);
// // console.log(a, b);

// // nested objects
// // const {
// //   fri: { open: o, close: c },
// // } = openingHours;
// // console.log(o, c);

// // const arr = [2,3,4];
// // const a = arr[0]
// // const b = arr[1]
// // const c = arr[2]

// // const [x,y,z] = arr;
// // console.log(x,y,z);
// // console.log(arr);

// // let [main, , secondary] = restaurant.categories;
// // console.log(main, secondary);

// // switching variables
// // const temp = main
// // main = secondary
// // secondary = temp;
// // console.log(main, secondary);

// //
// // [main, secondary] = [secondary, main]
// // console.log(main, secondary);

// // // return two values from a function
// // const [starter, mainCourse] = (restaurant.order(2,0))
// // console.log(starter, mainCourse);

// // // Nested Destructuring
// // const nested = [2,4, [5,6]];
// // // const [i, ,j] = nested;
// // // console.log(i, j);
// // const [ i, , [ j, k ] ] = nested
// // console.log(i,j,k);

// // // Default values
// // const [ p=1, q=1, r=1] = [8]
// // console.log(p,q,r);

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
let players1 = [...game.players[0]]; // team 1 players
let players2 = [...game.players[1]]; // team 2 players
let [gk, ...fieldPlayers] = players1; // create gk and fieldPlayers arrays

let allPlayers = [...players1, ...players2]; // creates allPlayers in 1 array
console.log(allPlayers);
let players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic']; // add new players to team 1
console.log(players1Final);

const {odds: {team1, x: draw, team2}} = game;
console.log(team1, draw, team2);

const printGoals = (...players) => {
console.log(`${players.length} goals were scored.`);
}

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals('Davies', 'Muller');
printGoals(...game.scored);

team1 < team2 && console.log(`team 1 is more likely to win`);
team1 > team2 && console.log(`team 2 is more likely to win`);
