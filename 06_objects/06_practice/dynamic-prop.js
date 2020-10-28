function printObjectProperty(obj, propName) {
    console.log(obj[propName]);
}

let me = {
    name: 'Bob',
    surname: 'Petrov',
    middleName: 'Ivanovich',
    birthDate: { year: 1991, month: 3, day: 14 },
    occupation: 'IT',
    married: true,
    'property with spaces': null,
    'propert.with.dots': undefined,
};

printObjectProperty(me, 'name');
printObjectProperty(me, 'property with spaces');