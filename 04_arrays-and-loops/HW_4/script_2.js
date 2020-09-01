//С помощью цикла создать перевёрнутый вариант произвольной строки.
//Например, строка «Привет, мир!» должна превратиться в «!рим ,тевирП».

"use strict";

let string = "Привет, мир!";

// variant #1

// let stringReversed = [];
// for (let i = string.length - 1; i >= 0; i--) {
//   stringReversed += string[i];
// }
// console.log(stringReversed);

// variant #2

let splitString = string.split(""); // get array from string
let reverseArray = splitString.reverse(); //reverse elements of array
let joinArray = reverseArray.join(""); //merge elements of array

console.log(joinArray);
