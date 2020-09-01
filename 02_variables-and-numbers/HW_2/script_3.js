"use strict";
let m = -10;
let n = -3;

let number = Math.round(Math.random() * Math.abs(n - m - 2) + Math.min(n, m));
let randomNumber = number + (number % 2) + 1;
console.log(randomNumber);


