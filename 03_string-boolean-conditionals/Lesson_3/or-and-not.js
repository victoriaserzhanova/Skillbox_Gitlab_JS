let day = 'Sunday';

// sunday OR saturday
if (day === 'Sunday' || day === "Saturday") {
    console.log (`${day} - its holiday`);
} else {
    break;
}

//length > 3 AND < 26
let password = '******';

if ( password.length > 3 && password.length < 26) {
    console.log('ok')
} else {
    break;
}

// Priority. first - &&, then ||
// условия  с && выполняются по порядку, пока JS не наткнется на false
let x = 8;
if ( x === 13 || x > 0 && x < 11) {
    console.log( ' x is 13 or number from 1 to 10')
};

//
let f = 102;

if ((f % 3 === 0 || f % 2 === 0) && f > 100) {
    console.log ('f делится на 3 или 2 и больше 100')
};

//инвертируем условие
let f = 101;
 if (!(f % 3 === 0 || f % 2 === 0 ) && f > 100) {
    console.log ('f не делится на 3 или 2 и больше 100')
 }