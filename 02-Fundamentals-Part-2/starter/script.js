'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('i can drive');

// const private = 534;

// function logger() {
//     console.log("my name is grant")
// }

// logger(23);
// logger();
// logger();
// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }


// function fruitProcessor (apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangPieces = cutFruitPieces(oranges);
//     const juice = `Juice with ${applePieces} pieces of apple and ${orangPieces} pieces of orange.`
//     return juice;
// }

// console.log(fruitProcessor(2,3))

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice)

// function declaration
// const age1 = calcAge1(1991);

// function calcAge1 (birthYear) {
//     return 2037 - birthYear;
// }

// function expression
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }
// const age2 = calcAge2(1991);
// console.log(age1, age2)

// Arrow function
// const calcAge3 = birthYear => 2037 - birthYear;

// const age3= calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`
// }

// console.log(yearsUntilRetirement(1991, "Grant"));
// console.log(yearsUntilRetirement(1980, "Bob"));

// const calcAverage = (score1, score2, score3) => {
//  const avgScore = ((score1 + score2 + score3) / 3 );
//  return avgScore
// }

// const checkWinner = ( avgDolphins, avgKoalas ) => {
//     if ( avgDolphins >= (avgKoalas * 2 )) {
//         return `Dolphins win ${avgDolphins} vs ${avgKoalas}`
//     } else if ( avgKoalas >= (avgDolphins * 2)) {
//         return `Koalas win ${avgKoalas} vs ${avgDolphins}`
//     } else {
//         return `there is no winner, try harder`
//     }
// }
// const avgDolphins = calcAverage(0, 23 ,71);
// const avgKoalas = calcAverage(200, 54 ,49);
// console.log(avgDolphins)
// console.log(avgKoalas)
// console.log(checkWinner(avgDolphins, avgKoalas))
// console.log(checkWinner(10, 20))



// const friends = ['Michael', 'Steve', 'Jen'];
// console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);
// console.log(years)
// console.log(friends[0])
// console.log(friends[2])
// console.log(friends.length)
// console.log(years.length)
// console.log(friends[friends.length - 1]);
// friends[2] = 'Jay';
// // console.log(friends);

// const firstName = 'grant'
// const grant = [firstName, 'emerson', 2037 - 1984, 'teacher', friends]
// // console.log(grant)
// // console.log(grant.length)

// function calcAge1 (birthYear) {
//     return 2037 - birthYear;
// }

// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = (calcAge1(years[0]));
// const age2 = (calcAge1(years[1]));
// const age3 = (calcAge1(years[ years.length - 1 ]));

// // console.log(age1, age2, age3)

// const ages = [(calcAge1(years[0])), (calcAge1(years[1])), 
// (calcAge1(years[ years.length - 1 ])) ]
// console.log(ages)


// const friends = ['Michael', 'Steve', 'Jen'];
// const newLength = friends.push('Jay'); // push calculates length
// console.log(friends);
// console.log(newLength);

// friends.unshift('John'); // add to the beginning of array
// console.log(friends);

//  const popped = friends.pop(); // removes last element in array
// console.log(friends);
// console.log(popped); // Jay

// friends.shift(); // remove first element in array 
// console.log(friends);

// console.log(friends.iOf('Steve')); // finds item in the array and returns its index
// console.log(friends.indexOf('bob')); // not in the array and returns -1 

// friends.push(23);
// console.log(friends.includes('Steve')); // returns boolean strict 
// console.log(friends.includes('bob')); // returns boolean
// console.log(friends.includes('23')); // returns false...doesnt do coercion
// console.log(friends.includes(23)); // returns true

// if (friends.includes('Jen')) {
//     console.log("you have a friend named Jen")
// }
// const bills = [ 125, 555, 44 ]
// const tips = [];
// const total = []; 
// const calcTip = bills => {

//     for (let i =0; i < bills.length; i++) {
//         if (bills[i] > 50 && bills[i] < 300) {
//             tips.push(bills[i] * .15)
//         } 
//         else if (bills[i] < 50 || bills[i] > 300){
//             (tips.push(bills[i] * .20))
//         }
//     }
//     total.push((bills[0] + tips[0]), (bills[1] + tips[1]), (bills[2] + tips[2]))
// }

// calcTip(bills);
// console.log(tips);
// console.log(total);


// const grant = {
//     firstName: 'Grant',
//     lastName: 'Emerson',
//     birthYear: 1984,
//     job: 'musician',
//     friends: ['Amelia', 'Silas', 'Blake'],
//     hasDriversLicense: false,
//     // calcAge: function(birthYear) {
//     //     return 2037 - birthYear
//     // }
//     // calcAge: function() {
//     //     // console.log(this);
//     //     return 2037 - this.birthYear
//     // }
//     calcAge: function() {
//         this.age = 2037 - this.birthYear
//         return this.age;
//     }
// }
// console.log(grant.calcAge());

// console.log(grant.age);
// console.log(grant.age);
// console.log(grant.age);

// "Grant is a 54-year old musician. and he has a driver's license"
// console.log()
// const challenge = () => {
// if (grant.hasDriversLicense) {
//     return "a"
// } else {
//     return "no"
// }
// }
// const answer = challenge(grant);
// console.log(answer)
// console.log(`${grant.firstName} is a ${grant.age} musician and he has ${answer} driver's license`)


// console.log(grant.firstName + ` has ${grant.friends.length} friends, and his best friend is ${grant.friends[1]}`)
// console.log(grant);
// console.log(grant['lastName']);

// const nameKey = 'Name';

// console.log(grant['first' + nameKey]);
// console.log(grant['last' + nameKey])

// const interestedIn = prompt('what do you want to know about Grant? Chose between firstName, lastName, age? ')
// console.log(interestedIn);


// if(grant[interestedIn]) {
//     console.log(grant[interestedIn]);

// } else {
//     console.log('answer correctly')
// }

// grant.location = 'Nashville';
// grant['twitter'] = '@nosremetnarg';
// console.log(grant);

// grant.smell = 'bad';
// grant['eyes'] = 'blue'

// const Mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//         this.bmi = (this.mass / (this.height * this.height))
//         return this.bmi
//     }
// };

// const John = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//         this.bmi = (this.mass / (this.height * this.height))
//         return this.bmi
//     }
// };
// Mark.calcBMI();
// John.calcBMI();
// console.log(Mark.bmi);
// console.log(John.bmi);

// const heavy = ( ) => {
//     if (Mark.bmi > John.bmi) {
//         console.log(`${Mark.fullName} weights ${Mark.bmi} and 
//         ${John.fullName} weights ${John.bmi}`)
//     } else if (Mark.bmi < John.bmi ) {
//         console.log(`${John.fullName} weights ${John.bmi} and 
//         ${Mark.fullName} weights ${Mark.bmi}`)
//     }
// }
// heavy()

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep} ✊`)
// }

// const grant = [
//     "Grant",
//     "Emerson",
//     2037 - 1984,
//     'musician',
//     ['Amelia', 'Silas', 'Blake'],
//     true
// ];
// const types = [];

// for (let i = 0; i < grant.length; i++) {
//     console.log(grant[i], typeof grant[i])

//     // filling an array
//     // types[i] = typeof grant[i];
//     types.push(typeof grant[i])
// }
// console.log(types)

// const years = [1984, 1991, 1969, 2020]
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     ages.push(2037 - years[i])

// }
// console.log(ages)

// const grant = [
//     "Grant",
//     "Emerson",
//     2037 - 1984,
//     'musician',
//     ['Amelia', 'Silas', 'Blake'],
//     true
// ];

// continue and break
// console.log('=====only strings=====')
// for (let i = 0; i < grant.length; i++) {
//     if (typeof grant[i] !== "string") continue;

//     console.log(grant[i], typeof grant[i])
// }

// console.log('=====BREAK WITH NUMBER=====')
// for (let i = 0; i < grant.length; i++) {
//     if (typeof grant[i] === "number") break;

//     console.log(grant[i], typeof grant[i])
// }

// for (let i = grant.length - 1; i >= 0; i--) {
//     console.log(grant[i])
// }

// for (let exercise = 1; exercise <= 3; exercise++) {
//     console.log(`===== Starting exercise ${exercise}`)
//     for (let rep = 1; rep < 6; rep++) {
//         console.log(`Exercise ${exercise} Lifting weight repetition ${rep} 🏋️‍♀️`)
//     }
// }


// for (let rep = 1; rep < 6; rep++) {
//     console.log(` 
//     Lifting weight repetition ${rep} 🏋️‍♀️`)
// }

// let rep = 1;
// while (rep <= 10) {
//     // console.log(` WHILE 
//     // Lifting weight repetition 
//     // ${rep} 🏋️‍♀️`);
//     rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// // console.log(dice);
// while (dice !== 6) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6)
//     console.log('loop is about to end..');
// }

// const bills = 
// [ 22, 295, 176, 440, 37, 
//     105, 10, 1100, 86, 52];

// const tips = [];
// const totals = [];

// const calcTip = () => {

//     for (let i =0; i < bills.length; i++) {
//         if (bills[i] > 50 && bills[i] < 300) {
//             tips.push(bills[i] * .15)
//         } 
//         else if (bills[i] < 50 || bills[i] > 300){
//             (tips.push(bills[i] * .20))
//         }
//         totals.push((bills[i] + tips[i]))
//     }
    
// }
// calcTip(bills)
// console.log(totals, tips, bills);

// const calcAverage = ( arr ) => {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i]
//     }
//  console.log(sum / (arr.length));
// }

// calcAverage(totals);
// calcAverage(tips);