'use strict';

const attributesForOption =[
	{ value: 'value_1', label: 'label_1'},
	{ value: 'value_2', label: 'label_2'},
]

const valueDefault = 'value_1';

function createElem(tagName, content, object) {
	const newEl = document.createElement(tagName);
	newEl.textContent = content;
	for (let key in object) {
		newEl.setAttribute( key, object[key])
	}
	return newEl;
}

function createDropdownListElem(array, valueDefault) {
	const content = 'text content';
	const dropdownListEl = createElem('select', content);
	array.forEach((item) =>{
		const optionEl = createElem('option', content, item);

		if (optionEl.value === valueDefault) {
			optionEl.setAttribute('selected', true);
		}
		dropdownListEl.append(optionEl);
	})
	return dropdownListEl;
}

const dropdownListEl = createDropdownListElem(attributesForOption, valueDefault);






