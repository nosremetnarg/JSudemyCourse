// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const x = '23';
// if (x === 23) console.log(23);

// const calcAge = birthYear => 2037 - birthYear;
// console.log(calcAge(1977));

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;

//     if (max < curTemp) max = curTemp;
//     if (min > curTemp) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
// // calcTempAmplitude([3, 7 , 4, 23, 34])
// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// const calcTempAmplitudeNew = function (t1, t2) {
//     const temps = t1.concat(t2);
//     console.log(temps)

//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;

//     if (max < curTemp) max = curTemp;
//     if (min > curTemp) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
// calcTempAmplitude([3, 7 , 4, 23, 34])
// const amplitudeNew = calcTempAmplitudeNew([3, 5,1] , [9, 0 ,5]);
// console.log(amplitudeNew);

// const measureKelvin = function() {
//     const measurement = {
//         type: 'temp',
//         unit: 'celsius',
//     };
//     console.table(measurement)
//     const kelvin = measurement.value + 273;
//     return kelvin
// }
// // identify bug
// console.log(measureKelvin())

// const calcTempAmplitudeBug = function (t1, t2) {
//         const temps = t1.concat(t2);
//         console.log(temps)
//       let max = 0;
//       let min = 0;

//       for (let i = 0; i < temps.length; i++) {
//         const curTemp = temps[i];
//         if (typeof curTemp !== 'number') continue;

//         if (max < curTemp) max = curTemp;
//         if (min > curTemp) min = curTemp;
//       }
//       console.log(max, min);
//       return max - min;
//     };
// calcTempAmplitude([3, 7 , 4, 23, 34])
// const amplitudeBug = calcTempAmplitudeBug([3, 5,1] ,
//     [9, 4 ,5]);
// console.log(amplitudeBug);

// const data1 = [17, 21, 23];
// const data2 = [12, 5, -5, 0, 4];

// const printForecast = function (arr) {
//   let temp = arr[0];
//   let day = Number([0]) + 1;
//   let str = '';
//   for (let i = 0; i < arr.length; i++) {
//     temp = arr[i];
//     day = Number([i]) + 1;
//     str += ` ${arr[i]} C in ${i + 1} days ...`;
//   }
//   // return (`... ${temp} C in ${day} days`)
//   console.log('... ' + str);
// };
// printForecast(data1);
// printForecast(data2);
// "... 17ºC in 1
// days ... 21ºC in 2 days ... 23ºC in 3 days ..."

