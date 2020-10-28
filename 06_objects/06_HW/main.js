'use strict';

let valuesForDropdownList =[
	{ value: 'value_1', label: 'label_1'},
	{ value: 'value_2', label: 'label_2'},
]


function createDropdownList(array, value,label) {
	let dropdownList = document.createElement('select');

	for (let key in array) {
		let dropdownListItem = document.createElement('option');
		
		dropdownListItem.value = array[key][value];
		dropdownListItem.textContent = array[key][label];
		dropdownList.append(dropdownListItem);
	}
	return dropdownList;
}

let dropdownList = createDropdownList(valuesForDropdownList,'value', 'label');


