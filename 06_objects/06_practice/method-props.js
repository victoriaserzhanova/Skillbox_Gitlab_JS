let name = 'Bob';
let surname = 'Petrov';

function getFullName() {
    return this.name + ' ' + this.surname;
}

let obj = { name, surname, getFullName }; 

console.log(obj.getFullName());

obj.whoAmI = function() {
    console.log(`Меня зовут ${this.name} ${this.surname}`);
};

obj.whoAmI();

//delete obj method
delete obj.getFullName;


//add the same method to another obj with different method names
let otherObj = {
    someMethod: getFullName,
};
otherObj.someOtherMethod = getFullName;

console.log(otherObj.someMethod());//Меня зовут undefined
console.log(otherObj.someOtherMethod());//Меня зовут undefined

