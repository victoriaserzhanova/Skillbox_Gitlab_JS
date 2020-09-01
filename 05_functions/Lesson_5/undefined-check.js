let array = [1, 2, 3, false, null];

if (array[5] !== undefined) console.log("element exists"); // doesn't work
if (array.length > 5) console.log("element exists");

let emptyVar = null;
