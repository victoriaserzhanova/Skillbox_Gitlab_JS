let me = {
    name: 'Bob',
};

// подмешиваем свойства в свежесозданный ПУСТОЙ обьект

let newMe = Object.assign (
    {}, // NEW empty object
    me,
    { name: 'Tim',},
    { surname: 'Petrov',},
);

console.log(newMe);// me and newMe are DIFFERENT objects
console.log(me);  // me IS NOT changed

console.log(me === newMe); //false


// SPREAD
let bob = {
    name: 'Bob',
};

let newMeBySpread ={
    ...bob,    // bob is NOT changed 
    ...{ name: 'Peter',},
    ...{ surname: 'Ivanov',},
};
    


console.log(newMeBySpread);// bob and newMeBySpread are DIFFERENT objects
console.log(bob);

console.log(me === newMeBySpread); //false