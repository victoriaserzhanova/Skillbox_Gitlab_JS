let list = document.createElement('ol');
document.body.append(list);

let lists = [
	document.createElement('li'),
	document.createElement('li'),
	document.createElement('li'),
	document.createElement('li'),
];

// id
list.id = 'listId';

lists[0].textContent = 'item1';
lists[1].textContent = 'item2';
lists[2].textContent = 'item3';
lists[3].textContent = 'item4';

// add element to the beginning
list.append(lists[0]);
list.append(lists[1]);
list.append(lists[2]);
list.append(lists[3]);

// reversed
list.reversed = true;

// start
list.start = 19;

// removeAttribute
list.removeAttribute('start');

// add class "list"
list.classList.add('list');

list.classList.toggle('class2'); //true

// check presence of class "list3"
list.classList.contains('list3'); //false
