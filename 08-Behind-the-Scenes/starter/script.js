'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = ''; // similar to textContent returns only content innerHTML returns everything

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${mov}</div>
        </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements);

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance} EUR`;
};
calcDisplayBalance(account1.movements);

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
// const user = 'Steven Thomas Williams'; //stw

createUsernames(accounts);
console.log(accounts);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE
// console.log(arr.slice(2))
// console.log(arr.slice(2,4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// console.log(arr.slice()); // creates shallow copy
// console.log([...arr]); // another way to create shallow copy

// // SPLICE this mutates
// // console.log(arr.splice(2));
// console.log(arr.splice(-1));
// console.log(arr);
// console.log(arr.splice(1,2));
// console.log(arr);

// // REVERSE this mutates
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f']

// console.log(arr2.reverse());
// console.log(arr2);

// // CONCAT
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// // JOIN
// console.log(letters.join(' - '));

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // for (const movement of movements) {
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1} You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1} You withdrew ${Math.abs(movement)}`);
//   }
// }
// console.log('---- FOREACH ----');
// movements.forEach(function (mov, i, arr) {
//   // current el, index, array this order is specific
//   if (mov > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${mov}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
//   }
// });

// 0: function(200)
// 1: function (450)
// etc ....

// MAP
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// SET does not have keys or index values
// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, _, map) {
//   console.log(`${value}: ${value}`);
// });

// Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy.
// A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.
// Your tasks:
// Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:
// 1. Juliafoundoutthattheownersofthefirstandthelasttwodogsactuallyhave cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
// 2. CreateanarraywithbothJulia's(corrected)andKate'sdata
// 3. Foreachremainingdog,logtotheconsolewhetherit'sanadult("Dognumber1
// is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy   ")
// 4. Runthefunctionforbothtestdatasets
// Test data:
// § Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3] § Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
// Hints: Use tools from all lectures in this section so far 😉

// 1.
// const checkDogs = function(arr1, arr2) {
//   arr1.shift();
//   arr1.splice(-2);
//   const newArr = (arr1.concat(arr2));
//   console.log(newArr);
//   newArr.forEach(function (value, key, map) {
//     // console.log(`${value}, ${key}`);
//     if (value >= 3) {
//       console.log(`Dog number ${key + 1} is and adult, and is ${value} years old`);
//     } else {
//       console.log(`Dog number ${key + 1} is still a puppy`);
//     }
//   })
// }
// const dogsJulia = [3, 5, 2, 12, 7];
// const dogsKate = [4, 1, 15, 8, 3]
// checkDogs(dogsJulia, dogsKate);

// const dogsJulia1 = [9, 16, 6, 8, 3];
// const dogsKate1 = [10, 5, 6, 1, 4]
// checkDogs(dogsJulia1, dogsKate1)

// console.log(dogsJulia.shift());
// console.log(dogsJulia.splice(-2));
// console.log(dogsJulia);
// const fullDogList = dogsKate.concat(dogsJulia);

// 2.
// console.log(fullDogList);

// 3.

// ========== Video 147 ===

// const eurToUsd = 1.1;

// // const movementsUSD = movements.map(function (mov) {
// //   return mov * eurToUsd;
// // });
// const movementsUSD = movements.map(mov => mov * eurToUsd);

// console.log(movements);
// console.log(movementsUSD);

// const movementsUSDfor = [];
// for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
// console.log(movementsUSDfor);

// const movementDescriptions = movements.map(
//   (mov, i) =>
//     `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
//       mov
//     )}`
// );
// console.log(movementDescriptions);

// const deposits = movements.filter(function(mov) {
//   return mov > 0
// })
// console.log(movements);
// console.log(deposits);

// const depositsFor = [];
// for (const mov of movements) if (mov > 0) depositsFor.push(mov);
// console.log(depositsFor);

// const withdrawals = movements.filter(mov => mov < 0)
// console.log(withdrawals);

console.log(movements);

// video 150 =======================

// accumulator -> snowball
// const balance = movements.reduce(function(acc, cur, i, arr) {
//   console.log(`iteration ${i}: ${acc}`);
//   return acc + cur
// }, 0)

const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance);

let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

// Maximum val of movements arr
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max);

// const movementDescriptions = movements.map(
//   (mov, i) =>
//     `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
//       mov
//     )}`
// );

// challenge 3 =================
const dogs = [5, 2, 4, 1, 15, 8, 3];
const dogs2 = [16, 6, 10, 5, 6, 1, 4];
const adultAges = [];
const calcAverageHumanAge = dogs => {
  dogs.map(dog => {
    if (dog <= 2) {
      const humanAge = dog * 2;
      adultAges.push(humanAge);
      console.log(humanAge);
    } else if (dog > 2 && dog < 18) {
      const humanAge1 = 16 + dog * 4;
      adultAges.push(humanAge1);
      console.log(humanAge1);
    }
    console.log(adultAges);
    console.log(
      adultAges.reduce((acc, cur) => {
        return acc + cur;
      }, adultAges[0]) / adultAges.length
    );
  });
};

// calcAverageHumanAge(dogs)
// calcAverageHumanAge([16,6,10,5,6,1,4])

// const CalcAvgAge = function (ages) {
//   const humanAges = ages.map(age => (age <= 2 ? age * 2 : 16 + age * 4));
//   const adultDogs = humanAges.filter(age => age >= 18)
//   console.log(humanAges, adultDogs);
//   const avgAdultAge = adultDogs.reduce((acc, cur) => {
//     return acc + cur
//   }, 0) / adultDogs.length
//   console.log(avgAdultAge);
// };
// CalcAvgAge([5, 2, 4, 1, 15, 8, 3]);

const calcTheAvg = function(ages) {
  const humanAge = ages.map(age => age <= 2 ? age * 2 : 16 + age * 4)
  const adultDog = humanAge.filter(age => age >= 18)
  console.log(humanAge, adultDog);
  const avgAdultAge = adultDog.reduce((acc, age) => {
    return acc + age
  }, 0) / adultDog.length
  console.log(avgAdultAge);
}
calcTheAvg([5,2,4,1,15,8,3])
calcTheAvg([16,6,10,5,6,1,4])