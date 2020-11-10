'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = (`${firstName} You are the age ${age}, born in ${birthYear}`);
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      const firstName = 'Frank';
      const str = `Oh, and you are a millenial ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      output = "NEW OUTPUT"
    }
    // console.log(add(2, 3));
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Grant';
calcAge(1984);
// console.log(age);
// printAge()
