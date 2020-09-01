"use strict";

let promo = ["ДАРИМ300", "СКИДКА15"];
let condition = [0.95, 0.85, 0.8];
let maxSum = 50000;

//Магазин использует скидки true/false
let myShopIsDicount = true;

function getPrice(totalSum, countGoods, code = null) {
  if (myShopIsDicount) {
    return getDiscount(code, totalSum, countGoods);
  }
  return totalSum;
}

function getDiscount(code, totalSum, countGoods) {
  let result = totalSum;

  if (code === promo[0]) {
    if (result <= 300) {
      result = 0;
    } else {
      result = result - 300;
    }
  }
  
  if ((countGoods) => 10) {
    result = result * condition[0];
  }

  if (result > maxSum) {
    result = (result - maxSum) * condition[2] + maxSum;
  }

  if (code === promo[1]) {
    if (result >= 20000) {
      result = result * condition[1];
    }
  }
  return result;
}

console.log(getPrice(80000, 35, promo[0]));
