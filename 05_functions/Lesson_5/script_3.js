"use strict";

let promo = ["ДАРИМ300", "СКИДКА15"];
let condition = [0.95, 0.85, 0.8];
let maxSum = 50000;

//Магазин использует скидки true/false
let myShopIsDicount = true;

let count300Promocode = function(result, code) {
    if (code === promo[0]) {
        if (result <= 300) {
          result = 0;
        } else {
          result = result - 300;
        }
      } 
      return result;
}

let get5PercentDiscount = function(result, countGoods) {
    if ((countGoods) => 10) {
        result = result * condition[0];
      }
    
    return result;
}

let get20PercentDiscount = function(result, maxSum) {
    if (result > maxSum) {
        result = (result - maxSum) * condition[2] + maxSum;
      }
    return result;
}
  
let count15Promocode = function(code,result) { 
  if (code === promo[1] && result >= 20000) {
    result = result * condition[1];
  }
  return result;
}

function getPrice(totalSum, countGoods, code = null) {
  if (myShopIsDicount) {
    return getDiscount(code, totalSum, countGoods);
  }
  return totalSum;
}

function getDiscount(code, totalSum, countGoods) {
  let result = totalSum;

  result = count300Promocode(result,code);

  result = get5PercentDiscount(result, countGoods);

  result = get20PercentDiscount(result, maxSum);

  result = count15Promocode(code,result);

  return result;
}

console.log(getPrice(70000, 35, promo[0]));



