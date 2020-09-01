"use strict";

// Напишите генератор массивов длиной count со случайными числами от n до m. Учтите, что n и m могут быть отрицательными, а также может быть n > m или n < m.
//Выведите результат с помощью console.log

// VARIANT #1
let count = 5;
let n = -3;
let m = -5;
let array = [];

for (let i = 0; i < count; i++) {
  array.push(Math.round(Math.random() * Math.abs(n - m) + Math.min(n, m)));
}

console.log(array);

// VARIANT #2

let array2 = [];
let a = 0;
while (a++ < count) {
  array2.push(Math.round(Math.random() * Math.abs(n - m) + Math.min(n, m)));
}

console.log(array2);
