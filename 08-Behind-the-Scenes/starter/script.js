// 'use strict';

// video 131 call and apply methods =====================

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Grant Emerson');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// book(23, 'Sarah Williams'); // doesnt work
// Call method
book.call(eurowings, 23, "Sarah Williams"); // call manually updates the this keyword to the first argument of function call
console.log(eurowings);

book.call(lufthansa, 239, "Santa Claus")
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: []
}

book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);

// Apply method
const flightData = [583, 'George Cooper']
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData) // spreading data from an array

// video 130 ========== functions returning functions ============

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// // these are closures
// const greeterHey = greet('Hey');
// greeterHey('Grant');
// greeterHey('Steven');

// const greeterBye = greet('bye');
// greeterBye('Amelia');
// greeterBye('Megan');

// greet('Hello')('Mike')

// // arrow function
// const bye = (greeting) => {
//   return nameHi = (name) => {
//     console.log(`${greeting} ${name}`);
//   }
// }

// bye('goodbye')('covid')

// video 127 =========================

// const fart = function () {
//   console.log(`stinks in here 💨`);
// };

// document.body.addEventListener('click', fart);
// ['grant', 'silas', 'amelia'].forEach(fart)

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...other] = str.split(' ');
//   return [first.toUpperCase(), ...other].join(' ');
// };

// // higher-order function
// const transformer = function (str, fn) {
//   console.log(`original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`transformed by: ${fn.name}`);
// };

// transformer('JavaScript is the best!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord);

// // JS uses callbacks all the time
// const high5 = function () {
//   console.log('👋');
// };

// document.body.addEventListener('click', high5);

// ['jonas', 'martha', 'adam'].forEach(high5);

// const addNum = function (num) {
//   return num + num;
// }

// const subtract = function(num) {
//   return num - num
// }
// const greeting = function(str) {
//   return `welcome to earth`
// }

// const mathMachine = function(num, fn) {
//   console.log(`Original number: ${num}`);
//   console.log(`Number with math: ${fn(num)}`);
// }

// mathMachine(3, addNum)
// mathMachine(3, subtract)
// mathMachine(greeting)

// const flight = 'LH234';
// const grant = {
//   name: 'Grant Emerson',
//   passport: 234343223,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = "Mr. " + passenger.name;

//   if (passenger.passport === 234343223) {
//     alert('checked in')
//   } else {
//     alert('Wrong Passport!')
//   }
// };

// checkIn(flight, grant);
// console.log(flight);
// console.log(grant);

// const flightNum = flight;
// const passenger = grant;

// const newPassport = function(person) {
//   person.passport = Math.trunc(Math.random() * 10000000)
// }

// newPassport(grant);
// checkIn(flight, grant);

// section 10 ======= video 124 ==============================

// const bookings = [];

// const createBooking = function (flightNum, numPassengers = 1, price = 199 * numPassengers) {
//   // ES 5
//   // numPassengers = numPassengers || 1;
//   // price = price || 199;
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };
// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 2);
// createBooking('LH123', 5);
// createBooking('LH123', undefined, 1000);

// const weekDays = ['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun'];
// const openingHours = {
//   [weekDays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekDays[4]]: {
//     open: 11,
//     close: 23,
//   },
//   [weekDays[5]]: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   // ES6 enhanced obj literal
//   openingHours,

//   order(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
//   orderDelivery({
//     starterIndex = 1,
//     mainIndex = 0,
//     time = '20:00',
//     address,
//   }) {},

//   orderPasta(ing1, ing2, ing3) {
//     console.log(
//       `here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
//     );
//   },

//   orderPizza(mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient, otherIngredients);
//   },
// };

// challenge 4 ==================================

// attempt 5
// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   // console.log(text);
//   const words = text.split('\n');
//   // console.log(words);
//   for (const [i, word] of words.entries()) {
//     const [first, second] = word.toLowerCase().trim().split('_');
//     // console.log(first, second);
//     const output = `${first}${second.replace(
//       second[0],
//       second[0].toUpperCase()
//     )}`;
//     console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
//   }
// });

// attempt 4
// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   const rows = text.split('\n');
//   for (const [i, row] of rows.entries()) {
//     const [first, second] = row.toLowerCase().trim().split('_');
//     const output = `${first}${second.replace(
//       second[0],
//       second[0].toUpperCase()
//     )}`;
//     console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
//   }
// });

// attempt 3
// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   const rows = text.split('\n'); // puts text in rows, seperates text
//   console.log(rows);
//   for (const [i, row] of rows.entries()) { // destructor using entries method to get individual entries and index of the array
//     const [first, second] = row.toLowerCase().trim().split('_');
//     console.log(first, second ); // create two arrays splitting them at the _ char, trimming off the white space and transforming the strings to lowerCase
//     const output = `${first}${second.replace( // adding camelCase to the second work
//       second[0],
//       second[0].toUpperCase()
//     )}`;
//     console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
//   }
// });

// attempt 2
// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   console.log(text);

//   const rows = text.split('\n'); // seperate entries
//   console.log(rows);

//   for (const [i, row] of rows.entries()) {
//     const [first, second] = row.toLowerCase().trim().split('_');

//     const output = `${first}${second.replace(
//       second[0],
//       second[0].toUpperCase()
//     )}`;
//     console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
//   }
// });

// attempt 1
// document.body.append(document.createElement('textarea'));
// const btn = document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   const lowerText = text.toLowerCase().trim();
//   const splitTexts = lowerText.split('\n');

//   for (const [i, splitText] of splitTexts.entries()) {
//     const [first, second] = splitText.toLowerCase().trim().split('_');

//     const output = `${first}${second.replace(
//       second[0],
//       second[0].toUpperCase()
//     )}`;
//     console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
//   }
// });

// video 122 ================== strings part 3

// split and join
// console.log('a+very+nice+string'.split('+'));
// console.log('grant emerson'.split(' '));

// const [firstName, lastName ] = 'grant emerson'.split(' ')
// // console.log(firstName, lastName);

// const newName =['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// const capitalizedName = function(name) {
//   const names = name.split(' ');
//   const namesUpper = [];
//   for (const n of names) {
//     //  namesUpper.push(n[0].toUpperCase() + n.slice(1));
//     namesUpper.push(n[0].replace( n[0], n[0].toUpperCase() ) + n.slice(1))

//       // capitalize first letter
//   }
//   console.log(namesUpper.join(' '));
// }

// capitalizedName('jessica ann smith davis');
// capitalizedName('grant alex emerson');

// // padding
// const message = 'Go to gate 23!';
// console.log(message.padStart(25, "+").padEnd(35, '+'));
// console.log('grant'.padStart(25, '+'));
// console.log('bob'.padStart(25, '=').padEnd(3, "+"));

// const maskCreditCard = function(number) {
//   const str = number + '';
//   const last = str.slice(-4);
//   return last.padStart(str.length, "*")
// }

// console.log(maskCreditCard(123321433))
// console.log(maskCreditCard(234432234234))
// console.log(maskCreditCard('09203232123'))

// // repeat
// const message2 = 'Bad Weather....All Departures Delayed ';
// console.log(message2.repeat(5));

// const planesInLine = function(n) {
//   console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
// }
// planesInLine(5);
// planesInLine(3)
// planesInLine(12)

// video 121 ================== strings part 2

// const airline = 'TAP Air Portugal';
// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// // fix capitalization in name
// const passenger = 'jOnAs';
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// function nameFix(name) {
//   const lowerName = name.toLowerCase();
//   const fixedName = lowerName[0].toUpperCase() + lowerName.slice(1);
//   console.log(fixedName);
// }
// nameFix('gRaNt');
// nameFix('aLeXaNdER');
// nameFix('SILAS');

// // comparing email
// const email = 'hello@grant.io';
// const loginEmail = '  Hello@grant.Io \n';

// // const lowerEmail = loginEmail.toLowerCase();
// // const trimmedEmail = lowerEmail.trim();
// // console.log(trimmedEmail);

// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);
// console.log(email === normalizedEmail);

// // replacing
// const priceGB = '288,97£';
// const priceUS = priceGB.replace('£', '$').replace(',', '.');
// console.log(priceUS);

// const announcement =
//   'All passengers come to boarding door 23, Boarding door 23';

// // console.log(announcement.replace('door', 'gate'));
// // console.log(announcement.replaceAll('door', 'gate'));
// console.log(announcement.replace(/door/g, 'gate')); // add in regex

// // Booleans
// const plane = 'Airbus 320neo';
// console.log(plane.includes('A320'));
// console.log(plane.includes('Boeing'));
// console.log(plane.startsWith('Air'));

// if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
//   console.log('part of the new airbus family');
// }

// // Practice exercise
// const checkBaggage = function(item) {
//   const baggage = item.toLowerCase();
//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log(`you are NOT allowed on board`);
//   } else {
//     console.log(`Welcome aboard`);
//   }
// }
// checkBaggage(`I have a laptop, some Food and a pocket Knife`)
// checkBaggage(`Socks and camera`)
// checkBaggage(`Got some snacks and a gun for protection`)

// video 120 ================== strings are primitive

// const airline = 'TAP Air Portugal';
// const plane = "A320";

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log(plane[3]);
// console.log('B737'[0]);

// console.log(airline.length);
// console.log('B737'.length);

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('Portugal'));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7)); // length of extracted string
// // is end minus beginning

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function (seat) {
//   // B and E are middle seats
//   const s = seat.slice(-1); // get last character
//   if (s === 'B' || s === 'E')
//   console.log('You got the middle seat 🏩')
//   else console.log("You are lucky ⚓️");
// }

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// console.log(new String('grant'));
// console.log(typeof new String('Grant'));

// // all string methods return primitives

// console.log(typeof new String('grant').slice(1));

// coding challenge 3 =============================================

// const gameEvents = new Map([
//   [17, '⚽ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽ GOAL'],
//   [80, '⚽ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// Attempt number two
// 1.

// const events = new Set(gameEvents.values());
// console.log(events);
// const keys = new Set(gameEvents.keys());
// console.log(keys);

// // 2.
// gameEvents.delete(64);
// console.log(gameEvents);

// // 3.

// const time = [...gameEvents.keys()].pop();
// console.log(time);
// console.log(`An event happened, on average, every ${time / gameEvents.size} minutes`);

// // 4 .

// for (const [min, event] of gameEvents){
//   const half = min < 45 ? 'FIRST' : 'SECOND';
//   console.log(`${half} HALF: ${min} ${event}`);
// }

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
