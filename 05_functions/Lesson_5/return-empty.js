function checkAge(age) {
    console.log(`Вам ${age} лет`);
    if (age >= 18) return;//terminates function
    console.log('Young');
    console.log(`${18 - age} years to 18`);
}

checkAge(2);
checkAge(23);


// undefined
function doNothing() {  //does't return anything
    console.log('jfghdfk');
}

console.log(doNothing());//undefined
let x= doNothing();
console.log(x); //undefined