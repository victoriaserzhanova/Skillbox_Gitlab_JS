'use strict';

document.addEventListener('DOMContentLoaded', function() {
	let timerInput = document.querySelector('.input');
	let startTimerBtn = document.querySelector('.btn');
	let timerCount = document.querySelector('.timer');
	let intervalTimer;

	// Для JavaScript поля формы не имеют текстового содержимого, их значения хранятся именно в value.
	function setTimerCount () {
		let initialTimerCount = parseInt(timerInput.value);
		if ((isNaN(initialTimerCount)) || (initialTimerCount <= 0) ) {
			alert("Enter a positive number, please");
		}
		else {
			timerCount.textContent = initialTimerCount;
		}
	}

	function decrementCount() {
		let currentTimerCount = parseInt(timerCount.textContent);
		currentTimerCount -= 1;
		timerCount.textContent = currentTimerCount;
		if (currentTimerCount == 0){
			clearInterval(intervalTimer);
		}
	}

	function startTimer () {
		clearInterval(intervalTimer);
		setTimerCount();
		intervalTimer = setInterval(decrementCount, 1000);
	}

	startTimerBtn.addEventListener('click', startTimer);
});



