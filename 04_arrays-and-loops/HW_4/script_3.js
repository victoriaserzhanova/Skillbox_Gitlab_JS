"use strict";
// Танк едет по дороге, на которой могут быть противотанковые мины. Дорога должна быть представлена в виде массива roadMines из 10 boolean-элементов.
//  Если элемент равен true, то это мина. Движение танка должно быть представлено как цикл,
//   в котором одна итерация — продвижение танка на следующий участок дороги (следующий элемент массива).
//    При передвижении выводить в консоль сообщение «танк переместился на ${position}», где position — номер ячейки + 1.
//    Если танк попал на мину, то нужно вывести сообщение «танк повреждён», если это 1-й взрыв, и «танк уничтожен», если это 2-й взрыв.
//    После 2-го взрыва танк считается уничтоженным и прекращает движение.

let roadMines = [
  true,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  true,
];

 //VARIANT #1

let n = 10;
let j = 0;

for (let i = 0; i < n; i++) {
  let position = i + 1;
  console.log(`танк переместился на ${position}`);
  let isMine = roadMines[i];
  if (isMine) {
    j++;
    if (j == 2) {
      console.log("танк уничтожен");
      break;
    }
    console.log("танк повреждён");
  }
}

