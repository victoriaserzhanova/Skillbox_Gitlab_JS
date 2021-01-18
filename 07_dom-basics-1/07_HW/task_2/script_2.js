"use strict";

const inputEl = document.createElement('input');
const titleEl = document.createElement('h2');
let timeoutTimer;

document.body.append(inputEl);
document.body.append(titleEl);

document.addEventListener("DOMContentLoaded", function () {
	inputEl.placeholder = 'enter some text, please';
	inputEl.addEventListener('change', changeTitleText);

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






