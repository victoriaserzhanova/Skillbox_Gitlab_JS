"use strict";

function createNewElement(tagName) {
	const newEl = document.createElement(tagName);
	return newEl;
}

const inputEl = createNewElement('input');
const titleEl = createNewElement('h2');

document.body.append(inputEl);
document.body.append(titleEl);

document.addEventListener("DOMContentLoaded", function () {
	inputEl.placeholder = 'enter some text, please';
	inputEl.addEventListener('change', changeTitleText);
	let timeoutTimer;

	function setInputValueToTitle() {
		titleEl.textContent = inputEl.value;
		inputEl.value = '';
	}

	function changeTitleText () {
		if (timeoutTimer !== undefined) {
			clearTimeout(timeoutTimer);
		}
		timeoutTimer = setTimeout(setInputValueToTitle, 300);
	}
});


