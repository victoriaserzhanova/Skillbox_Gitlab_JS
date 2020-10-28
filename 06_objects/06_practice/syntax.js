let name = 'Tim';
let surname = 'Ivanov';
let middle = 'Petrovich';

let me = {
    name: name,
    surname: surname,
    middleName: middle,
    birthDate: { year: 1991, month: 3, day: 14 },
    occupation: 'IT',
    married: true,
    'property with spaces': null,
    'propert.with.dots': undefined,
};

//create new property of object
me.education = 'MSU';

//change the existing object property
me.name = 'Bob';

//the same actions with  string property
me['property with spaces'] = 45;
me['new.property'] = 'new property';

// delete object property

delete me.surname;
delete me['propert.with.dots'];

//get property value by its name

let myName = me.name;
let myBirthYear = me.birthDate.year;
let number = me['property with spaces'];

let emptyProp = me.someProp; //undefined

console.log(me);
console.log(emptyProp);