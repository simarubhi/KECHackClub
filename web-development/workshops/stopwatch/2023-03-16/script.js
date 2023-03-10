// Bring in elements
const stopWatch = document.querySelector('.stopwatch');

// Bring in buttons
const startBtn = stopWatch.querySelector('.btn.start');
const stopBtn = stopWatch.querySelector('.btn.stop');
const resetBtn = stopWatch.querySelector('.btn.reset');

// Bring in display numbers
const hourDisplay = stopWatch.querySelector('.time-value.hour');
const minuteDisplay = stopWatch.querySelector('.time-value.minute');
const secondDisplay = stopWatch.querySelector('.time-value.second');

let hourValue = 0; // Hour value
let minuteValue = 0; // Minute value
let secondValue = 0; // Second value
let timerCounting = false; // Shows if timer is counting or not

startBtn.addEventListener('click', () => {
	timerCounting = true;
	timerCount();
})

const timerCount = () => {
	if (timerCount == false) return;

	secondValue = secondValue + 1;

	if (secondValue == 60) {
		minuteValue = minuteValue + 1;
		secondValue = 0;
	}

	if (minuteValue == 60) {
		hourValue = hourValue + 1;
		minuteValue = 0;
	}

	updateDisplay();
	
}

const updateDisplay = () => {
	// Sets hour value
	if (hourValue < 10) {
		hourDisplay.innerHTML = '0' + hourValue;
	} else {
		hourDisplay.innerHTML = hourValue;
	}

	// Minute Value
	if (minuteValue < 10) {
		minuteDisplay.innerHTML = '0' + minuteValue;
	} else {
		minuteValue.innerHTML = minuteValue;
	}

	// Second Value
	if (secondValue < 10) {
		secondDisplay.innerHTML = '0' + secondValue;
	} else {
		secondDisplay.innerHTML = secondValue;
	}
}
