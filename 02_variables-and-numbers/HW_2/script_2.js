"use strict"

let a = 13.890123;
let b = 2.891564;
let n = 3;

let firstNumber = Math.floor(a % 1 * Math.pow(10, n));
let secondNumber = Math.floor(b % 1 * Math.pow(10, n));

console.log(firstNumber, secondNumber);
console.log("Первое число больше", firstNumber > secondNumber);
console.log("Второе число больше", firstNumber < secondNumber);
console.log("Первое число больше или равно", firstNumber >= secondNumber);
console.log("Второе число больше или равно", firstNumber <= secondNumber);
console.log("Первое число больше или равно", firstNumber >= secondNumber);
console.log("Числа равны", firstNumber === secondNumber);
console.log("Числа не равны", firstNumber !== secondNumber);