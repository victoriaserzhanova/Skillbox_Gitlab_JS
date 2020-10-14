let me = {
    name: 'Bob',
};

//Object.assign merges some objects to a first arguement me and returns it
//подмешиваем свойства к уже существующему обьекту me
let newMe = Object.assign(
    me,    // me is changed and returned
    { name: 'Tim',},
    { surname: 'Petrov',},
);

console.log(newMe);// me and newMe became the SAME object
console.log(me);

console.log(me === newMe); //true

