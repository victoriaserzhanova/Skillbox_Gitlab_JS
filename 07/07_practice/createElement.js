let h2 = document.createElement('h2');
h2.textContent = 'To buy list';
document.body.append(h2);

let ol = document.createElement('ol');
document.body.append(ol);

let listItems = [
	document.createElement('li'),
	document.createElement('li'),
	document.createElement('li'),
	document.createElement('li'),
];

listItems[0].textContent = '1milk';
listItems[1].textContent = '2bread';
listItems[2].textContent = '3water';
listItems[3].textContent = '4butter';

// add element to the beginning
ol.prepend(listItems[0]);
ol.prepend(listItems[3]);
ol.prepend(listItems[2]);

// add element to the end
ol.append(listItems[1]);

// add one more listItem BEFORE AFTER
let eggs = document.createElement('li');
eggs.textContent = '5eggs';
listItems[3].before(eggs);

// eggs is not copied but changes link to object.
listItems[1].after(eggs);

// link to array
let sausages = document.createElement('li');
sausages.textContent = '6sausages';
listItems[1].after(sausages);

// link to parent element
ol.children[0].after(sausages);

// replaceWith
let replaceMilk = document.createElement('li');
replaceMilk.innerHTML = '<b>sugar<b>'
ol.children[3].replaceWith(replaceMilk);

//remove
ol.children[2].remove();
