'use strict';

const numbers =[1, 'two', 'three', 4];
const attributesForOption =[
	{ value: 'value_1', label: 'label_1'},
	{ value: 'value_2', label: 'label_2'},
]

// const dataForDropdownList = attributesForOption;
const dataForDropdownList = createArrayOfObjects(numbers);
const valueDefault = (dataForDropdownList[1]['value']).toString();


function createElem(tagName, content, object) {
	const newEl = document.createElement(tagName);
	newEl.textContent = content;
	for (let key in object) {
		newEl.setAttribute( key, object[key])
	}
	return newEl;
}

function createArrayOfObjects(array) {
	const arrayOfObjects = [];
	for (let item of array) {
		const newDataObject = {};
		newDataObject['value'] = item;
		newDataObject['label'] = item;
		arrayOfObjects.push(newDataObject);
	}
	return arrayOfObjects;
}

function createDropdownListElem(array, valueDefault) {
	const content = 'text content';
	const dropdownListEl = createElem('select');
	array.forEach((item) =>{
		const optionEl = createElem('option', content, item);

		if (optionEl.value === valueDefault) {
			optionEl.setAttribute('selected', true);
		}
		dropdownListEl.append(optionEl);
	})
	return dropdownListEl;
}

const dropdownListEl = createDropdownListElem(dataForDropdownList, valueDefault);






