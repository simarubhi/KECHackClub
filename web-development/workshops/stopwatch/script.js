const stopWatch = document.querySelector('.stopwatch');

const startBtn = stopWatch.querySelector('.btn.start');
const stopBtn = stopWatch.querySelector('.btn.stop');
const resetBtn = stopWatch.querySelector('.btn.reset');

const hourDisplay = stopWatch.querySelector('.time-value.hour');
const minuteDisplay = stopWatch.querySelector('.time-value.minute');
const secondDisplay = stopWatch.querySelector('.time-value.second');

let hourValue = 0;
let minuteValue = 0;
let secondValue = 0;
let timerCounting = false;

startBtn.addEventListener('click', () => {
	timerCounting = true;
	startBtn.innerHTML = 'Start';
	timerCount();
});

stopBtn.addEventListener('click', () => {
	timerCounting = false;
	startBtn.innerHTML = 'Resume';
});

resetBtn.addEventListener('click', () => {
	timerCounting = false;
	startBtn.innerHTML = 'Start';
	hourValue = 0;
	minuteValue = 0;
	secondValue = 0;
	updateDisplay();
});

const timerCount = () => {
	if (!timerCounting) return;

	secondValue++;

	if (secondValue == 60) {
		minuteValue++;
		secondValue = 0;
	}

	if (minuteValue == 60) {
		hourValue++;
		minuteValue = 0;
	}

	updateDisplay();

	setTimeout(timerCount, 1000);
};

const updateDisplay = () => {
	if (hourValue < 10) {
		hourDisplay.innerHTML = '0' + hourValue;
	} else {
		hourDisplay.innerHTML = hourValue;
	}

	if (minuteValue < 10) {
		minuteDisplay.innerHTML = '0' + minuteValue;
	} else {
		minuteDisplay.innerHTML = minuteValue;
	}

	if (secondValue < 10) {
		secondDisplay.innerHTML = '0' + secondValue;
	} else {
		secondDisplay.innerHTML = secondValue;
	}
};
