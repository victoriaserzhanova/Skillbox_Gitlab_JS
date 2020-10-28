let digit = 20;
let otherDigit = digit; //link to digit COPIES value from digit

//initial value doesn't change cause otherDigit just COPIES value from digit
otherDigit += 5;

console.log(digit, otherDigit);

let obj = { model: 'VW Polo',};
let otherObj = obj; // otherObject contains LINK to the object, NOT the object itself

//obj and otherObj are linked to the SAME object. BOTH can change initial object
otherObj.model = 'Audi'; //change the existing property
obj.year = '2019'; //add new property

console.log(obj, otherObj);