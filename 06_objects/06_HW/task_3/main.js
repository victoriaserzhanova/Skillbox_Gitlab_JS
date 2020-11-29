'use strict';

//different types of data for createDropdownListElem()
const arrayExample =[1, 'two', 'three', 4];
const objectExample = {
	'2': 'str',
	4: 'str1',
	'str3': 24,
	45: 34,
};

function createElem(tagName, content, object) {
	const newEl = document.createElement(tagName);
	newEl.textContent = content;
	for (let key in object) {
		newEl.setAttribute( key, object[key])
	}
	return newEl;
}

// adapt array of primitives to array of objects
function createArrayAdapter(array) {
	const arrayOfObjects = [];
	for (let item of array) {
		const newDataObject = {};
		newDataObject['value'] = item;
		newDataObject['label'] = item;
		arrayOfObjects.push(newDataObject);
	}
	console.log(arrayOfObjects);
	return arrayOfObjects;
}

// adapt object of primitives to array of objects
function createObjectAdapter(object) {
	const arrayOfObjects = [];
	for (let key in object) {
		const newDataObject = {};
		newDataObject['value'] = key;
		newDataObject['label'] = object[key];
		arrayOfObjects.push(newDataObject);
	}
	console.log(arrayOfObjects);
	return arrayOfObjects;
}

function createDropdownListElem(data, indexDefault) {
	const content = 'text content';
	const dropdownListEl = createElem('select');
	let attributesForOption;

	if (Array.isArray(data)) {
		attributesForOption = createArrayAdapter(data);
	}
	else {
		attributesForOption = createObjectAdapter(data);
	}

	attributesForOption.forEach((item) => {
		const valueDefault = (attributesForOption[indexDefault]['value']).toString();
		const optionEl = createElem('option', content, item);

		if (optionEl.value === valueDefault) {
			optionEl.setAttribute('selected', true);
		}
		dropdownListEl.append(optionEl);
	})
	return dropdownListEl;
}

const dropdownListEl = createDropdownListElem(arrayExample, 1);






