// obj1 and obj2 are links to the SAME object
let obj1 = { name: 'name',};
let obj2 = obj1;

console.log(obj1===obj2); //true

obj2 = { name: 'name',}; //obj2 now is a link to another object

console.log(obj1===obj2); //false