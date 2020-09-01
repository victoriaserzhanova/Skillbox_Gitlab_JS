// by value
let array = [1,1,2,34];

for (let fruit of array) {
    console.log(fruit);
}


//for in is very slow. don't use
//by index
let arr = ['a','gfhjg','fghfg'];
for (let i in arr) {
    console.log(arr[i]);
    console.log(i + 1); // i is a string
    console.log(parseInt(i) + 1);
}
