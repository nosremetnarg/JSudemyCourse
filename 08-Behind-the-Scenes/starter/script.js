'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     let output = (`${firstName} You are the age ${age}, born in ${birthYear}`);
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       const firstName = 'Frank';
//       const str = `Oh, and you are a millenial ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }

//       output = "NEW OUTPUT"
//     }
//     // console.log(add(2, 3));
//     console.log(output);
//   }
//   printAge();

//   return age;
// }

// const firstName = 'Grant';
// calcAge(1984);
// console.log(age);
// printAge()



console.log(me);
// console.log(job);
// console.log(year);

var me = 'Grant';
let job = 'teacher';
const year = 1984;

// Functions 
// console.log(addDecl(2,3));
// console.log(addExpr(2,3));
// console.log(addArrow(2,3));

function addDecl(a,b) {
    return a + b;
}

const addExpr = function(a,b) {
    return a + b
}

var addArrow = (a, b) => a + b;

// Example
if(!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
    console.log('All products deleted');
}

