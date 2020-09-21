"use strict";

//Сгенерировать массив чисел 1–31 включительно (числа месяца).
//  Вывести с помощью console.log для каждого из чисел строку ${число} января, ${день недели}.
//   День недели 1 января должен задаваться с помощью переменной, то есть программа должна корректно работать для любого дня недели,
//   с которого начинается месяц. Подсказка 1: для дней недели можно создать массив с названиями дней, чтобы обращаться к нему по индексу.
//  Подсказка 2: индекс дня недели можно вычислить с помощью операции остатка от деления

let daysOfMonth = [];
let days = 31;
let daysOfWeek = [
  "понедельник",
  "вторник",
  "среда",
  "четверг",
  "пятница",
  "суббота",
  "воскресенье",
];

let indexOfFirstDay = Math.round(Math.random() * 6); // рандомный день недели

for (let i = 1; i <= days; i++) {
  daysOfMonth.push(i);
}

for (let day of daysOfMonth) {
  let dayOfWeek = daysOfWeek[indexOfFirstDay];
  console.log(`${day} января, ${dayOfWeek}`);
  indexOfFirstDay++;
  if (indexOfFirstDay === 7) {
    indexOfFirstDay = 0;
  }
}