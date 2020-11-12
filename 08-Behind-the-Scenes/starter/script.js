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



// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'Grant';
// let job = 'teacher';
// const year = 1984;

// Functions 
// console.log(addDecl(2,3));
// console.log(addExpr(2,3));
// console.log(addArrow(2,3));

// function addDecl(a,b) {
//     return a + b;
// }

// const addExpr = function(a,b) {
//     return a + b
// }

// var addArrow = (a, b) => a + b;

// // Example
// if(!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//     console.log('All products deleted');
// }

// console.log(this)

// const calcAge = function(birthYear) {
//     console.log(2037 - birthYear);
//     // console.log(this);
// }
// calcAge(1984);

// const calcAgeArrow = (birthYear) => {
//     console.log(2037 - birthYear);
//     // console.log(this);
// }
// calcAgeArrow(1991);

// const grant = {
//     year: 1991,
//     calcAge: function() {
//         console.log(this);
//         console.log(2037 - this.year);
//     }
// }
// grant.calcAge();

// const matilda = {
//     year: 2017,
// };

// matilda.calcAge = grant.calcAge;
// matilda.calcAge()

// const f = grant.calcAge;
// f();

// var firstName = 'Jonas'

const grant = {
    firstName: 'Grant',
    year: 1991,
    calcAge: function() {
        // console.log(this);
        console.log(2037 - this.year);

        // const self = this;
        // const isMillenial = function() {
        //     console.log(self);
        //     // console.log(this.year >= 1981 && this.year <= 1996);
        //     console.log(self.year >= 1981 && self.year <= 1996);
        // };


        const isMillenial = () => {
            console.log(this);
            console.log(this.year >= 1981 && this.year <= 1996);
        };
       isMillenial();
    },
    greet: () =>{
        console.log(this);
        console.log(`Hey ${this.firstName}`)},
};

grant.greet();
grant.calcAge();

// arguments keyword
const addExpr = function(a,b) {
    console.log(arguments);
    return a + b
}
addExpr(2,5);
addExpr(2, 5, 8, 12)

var addArrow = (a, b) => {
    console.log(arguments);
    return a + b
};
addArrow((2,5,8))