let x = 0;
 if (Math.random() > 0.5) {
	x = 10;
} else {
    x = 20;
}

// the same

x = Math.random() > 0.5 ? 10 : 20;


//bad example

let age = 23;
let isAdult = age > 18 ? true : false;

// right variant

let isAdultDoneRight = age > 18;
