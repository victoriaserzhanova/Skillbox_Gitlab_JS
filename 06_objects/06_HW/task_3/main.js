'use strict';

//different types of data for createDropdownListElem()
const arrayExample =[1, 'two', 'three', 4];
const objectExample = {
	'2': 'str',
	4: 'str1',
	'str3': 24,
	45: 34,
};

const arrayOfObjectsExample =[
	{ value: 'value_1', label: 'label_1'},
	{ value: 'value_2', label: 'label_2'},
]

function createElem(tagName, content, object) {
	const newEl = document.createElement(tagName);
	newEl.textContent = content;
	for (let key in object) {
		newEl.setAttribute( key, object[key])
	}
	return newEl;
}

// adapt array of primitives to array of objects
function arrayAdapter(array) {
	if (typeof(array[0])==='object') {
		return array;
	}
	const arrayOfObjects = [];
	for (let item of array) {
		const newDataObject = {};
		newDataObject['value'] = item;
		newDataObject['label'] = item;
		arrayOfObjects.push(newDataObject);
	}
	return arrayOfObjects;
}

// adapt object of primitives to array of objects
function objectAdapter(object) {
	const arrayOfObjects = [];
	for (let key in object) {
		const newDataObject = {};
		newDataObject['value'] = key;
		newDataObject['label'] = object[key];
		arrayOfObjects.push(newDataObject);
	}
	return arrayOfObjects;
}

function createDropdownListElem(data, valueDefault) {
	const content = 'text content';
	const dropdownListEl = createElem('select');
	let attributesForOption;

	if (Array.isArray(data)) {
		attributesForOption = arrayAdapter(data);
	}
	else {
		attributesForOption = objectAdapter(data);
	}

	attributesForOption.forEach((item) => {
		const optionEl = createElem('option', content, item);

		if (optionEl.value === valueDefault) {
			optionEl.setAttribute('selected', true);
		}
		dropdownListEl.append(optionEl);
	})
	return dropdownListEl;
}
const valueDefault = 'value_2';
const dropdownListEl = createDropdownListElem(arrayOfObjectsExample, valueDefault);






