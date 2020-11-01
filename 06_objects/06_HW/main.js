'use strict';

let valuesForDropdownList =[
	{ value: 'value_1', label: 'label_1'},
	{ value: 'value_2', label: 'label_2'},
]


function createDropdownList(array, valueDefault) {
	let dropdownList = document.createElement('select');

	array.forEach((item, index) => {
		let dropdownListItem = document.createElement('option');

		dropdownListItem.value = item['value'];
		dropdownListItem.textContent = item['label'];
		dropdownList.append(dropdownListItem);

		if (index == 0) {
			dropdownListItem.setAttribute('selected', true);
		}

		if (dropdownListItem.value == valueDefault) {
			dropdownListItem.setAttribute('selected', true);
		}
	});
	return dropdownList;
}

let valueDefault = 'value_2';
let dropdownList = createDropdownList(valuesForDropdownList, valueDefault);


