let cards = ['2', 'король', '3', 'дама'];
let hand = [];

for (let card of cards) {
    if ( card !== 'король' && card !== 'туз') continue;//stop itteration
    hand.push(card);
    console.log('карта ' + card + ' добавлена в руку');
}

console.log('карты в руке' , hand)

//
console.log('ищем даму в колоде')

let found = false;

for (let card of cards) {
    console.log(`из колоды вытянута карта ${card}`);
    if (card === 'дама') {
        found = true;
        break;
    }
}

console.log(found ? 'мы нашли даму!' : ' в колоде нет');


//  
console.log('Цикл for');

let i 

for (i = 0; i < 11; i += 2) {
    console.log(i);
}

//  аналогичный цикл while  с условием для завершения в теле цикла
i = 0

while (true) {
    if (i > 10) break;
    console.log(i);
    i += 2;
}

