// 'use strict';

const weekDays = ['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  [weekDays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced obj literal
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {},

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients);
  },
};

// coding challenge 3 =============================================

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

// Attempt number two
// 1. 

const events = new Set(gameEvents.values());
console.log(events);
const keys = new Set(gameEvents.keys());
console.log(keys);

// 2. 
gameEvents.delete(64);
console.log(gameEvents);

// 3.

const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(`An event happened, on average, every ${time / gameEvents.size} minutes`);

// 4 .

for (const [min, event] of gameEvents){
  const half = min < 45 ? 'FIRST' : 'SECOND';
  console.log(`${half} HALF: ${min} ${event}`);
}


// for (const [min, event] of gameEvents) {
//   const half = min < 45 ? 'FIRST' : 'SECOND'
//   console.log(`[${half} HALF]:${min} ${event}`);
// }


// // 1.
// const eventSet = [...new Set(gameEvents.values())];
// console.log(eventSet);

// // 2. 
// console.log(gameEvents.delete(64));
// console.log(gameEvents);

// // 3. 
// console.log(`An event happened, on average, every ${90 / gameEvents.size} minutes`);
// const time = [...gameEvents.keys()].pop();
// console.log(time);
// console.log(`An event happened, on average, every ${time / gameEvents.size} minutes`);



// // 4.
// for (const [min, event] of gameEvents) {
//   const half = min <= 45 ? "FIRST" : "SECOND"
//   console.log(`[ ${half} HALF] ${min}: ${event}`);
// }

// coding challenge 3 =============================================


// video 118 data structure summary ===========================

// video 117 MAP II ===========================================

// const question = new Map([
//   ['question', 'what is the best programming language in the world'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct 🏄🏼‍♂️'],
//   [false, 'try again'],
// ]);
// console.log(question);

// // Convert object to Map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours))
// console.log(hoursMap);

// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if(typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }

// // const answer = Number(prompt('Your answer'))
// const answer = 3;
// console.log(answer);

// console.log(question.get(question.get('correct') === answer));

// // Convert map to array
// console.log([...question]);
// // console.log(question.entries());
// console.log([...question.keys()]);
// console.log([...question.values()]);

// video 116 MAP =================================

// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// console.log(rest.set(2, 'Lisbon, Portugal'));

// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open ;D')
//   .set(false, 'We are closed ;(');

// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
// rest.delete(2)
// // rest.clear()
// const arr = [1,2]
// rest.set(arr, 'Test')
// rest.set(document.querySelector('h1'), 'Heading')
// console.log(rest);
// console.log(rest.size);
// console.log(rest.get(arr))

// video 115 SET ================================
// const ordersSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);
// console.log(ordersSet);
// console.log(new Set('Grant'));
// console.log(ordersSet.size);
// console.log(ordersSet.has('Pizza'));
// console.log(ordersSet.has('Bread'));
// ordersSet.add('Garlic Bread');
// ordersSet.add('Garlic Bread');
// ordersSet.delete('Risotto');
// // ordersSet.clear();
// console.log(ordersSet);

// for(const order of ordersSet) console.log(order);

// // Example
// const staff = ['waiter', 'chef', 'waiter', 'manager', 'waiter', 'chef'];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);
// console.log(new Set(['waiter', 'chef', 'waiter', 'manager', 'waiter', 'chef']).size);
// console.log(new Set('grantemerson').size);
// ==================== video 115


// // property names
// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days: `
// for (const day of properties) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

// // property values
// const values = Object.values(openingHours);
// console.log(values);

// // entire object
// const entries = Object.entries(openingHours);
// // console.log(entries);

// // [key, value] value is an obj so it can be destructored
// for ( const [key, {open, close}] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

// if(restaurant.openingHours && restaurant.openingHours.mon) console.log
// (restaurant.openingHours.mon.open);

// WITH optional chaining
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// Example
// const days = ['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun']
// for(const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed'
//   console.log(`on ${day}, we open at ${open}`);
// }

// Methods
// console.log(restaurant.order?.(0,1) ?? "Method does not exist");
// console.log(restaurant.orderRisotto?.(0,1) ?? "Method does not exist");

// Arrays
// const users = [
//   {name: "Grant", email: 'grant@gmail.com'}
// ];
// console.log(users[0]?.name ?? "User array empty");

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item); // for of loop

// for (const [i, el] of menu.entries()) {
//   console.log(`${i+ 1}: ${el}`); // destructoring the array
// }

// console.log([...menu.entries()]);

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

// ====== challenge 1 ===============================
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
// Challenge 2 redo ============================================
// 1.

// for(const [i, player] of game.scored.entries()) // this method loops over an array
// console.log(`Goal ${i +1 }: ${player}`);

// 2.

// let average = 0
// const values = Object.values(game.odds)
// console.log(values);
// for (const odd of values)
// average += odd;
// console.log(average);
// average /= values.length;
// console.log(average);

// // 3.
// const odds = Object.entries(game.odds);
// console.log(odds);
// for (const [team, odd] of odds){
//   console.log(team);
// const teamStr = team === 'x' ? 'draw' : `Victory ${game[team]}`
// console.log(`Odd of ${teamStr} ${odd}`);
// }

// Challenge 2 redo  end ============================================

// ================== challenge 2 ======================
// 1.
// for ( const score of game.scored) { // for of loop and obj navigation
//   console.log(score);
// }

// for (const [i, player] of game.scored.entries()) // entries to get index and get goal number
// console.log(`Goal ${i + 1}: ${player}`);

// // 2.
// let avg = 0
// const values1 = Object.values(game.odds)
// for (const odd of values1)
//   avg += odd;
//   console.log(avg);
//   avg /= values1.length; // divide by length of array
//   console.log(avg);

// // 3.

// for(const [team, odd]of Object.entries(game.odds)){
//   const teamStr = team === 'x' ? 'draw' : `Victory ${game[team]}`
//   console.log(`Odd of ${teamStr} ${odd}`);
// }

// ======================== challenge 2 ended ==========================

// const days = ['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun']
// for(const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed'
//   console.log(`on ${day}, we open at ${open}`);
// }

// // property values
// const values = Object.values(openingHours);
// console.log(values);

// // entire object
// const entries = Object.entries(openingHours);
// // console.log(entries);

// // [key, value] value is an obj so it can be destructored
// for ( const [key, {open, close}] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

// const [players1, players2] = game.players;
// console.log(players1, players2);

// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// const allPlayers = [...players2, ...players1];
// console.log(allPlayers);

// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// const { team1, x: draw, team2 } = game.odds;
// console.log(team1, draw, team2);

// const printGoals = (...player) => {
//   console.log(player);
// }

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Davies', 'Muller');

// team1 > team2 && console.log(`team2 is winning`);
// team1 < team2 && console.log(`team1 is winning`);

// let players1 = [...game.players[0]]; // team 1 players
// let players2 = [...game.players[1]]; // team 2 players
// let [gk, ...fieldPlayers] = players1; // create gk and fieldPlayers arrays

// let allPlayers = [...players1, ...players2]; // creates allPlayers in 1 array
// console.log(allPlayers);
// let players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic']; // add new players to team 1
// console.log(players1Final);

// const {odds: {team1, x: draw, team2}} = game;
// console.log(team1, draw, team2);

// const printGoals = (...players) => {
// console.log(`${players.length} goals were scored.`);
// }

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Davies', 'Muller');
// printGoals(...game.scored);

// team1 < team2 && console.log(`team 1 is more likely to win`);
// team1 > team2 && console.log(`team 2 is more likely to win`);
