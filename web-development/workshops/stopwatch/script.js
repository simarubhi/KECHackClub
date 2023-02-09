const stopWatch = document.querySelector('.stopwatch'); // Get the stopwatch element

const startBtn = stopWatch.querySelector('.btn.start'); // From the stopwatch get the start button
const stopBtn = stopWatch.querySelector('.btn.stop'); // From the stopwatch get the stop button
const resetBtn = stopWatch.querySelector('.btn.reset'); // From the stopwatch get the reset button

const hourDisplay = stopWatch.querySelector('.time-value.hour'); // From the stopwatch get the hour display element
const minuteDisplay = stopWatch.querySelector('.time-value.minute'); // From the stopwatch get the minute display element
const secondDisplay = stopWatch.querySelector('.time-value.second'); // From the stopwatch get the second display element

let hourValue = 0; // This will hold our hour value
let minuteValue = 0; // This will hold our minute value
let secondValue = 0; // This will hold our second value
let timerCounting = false; // This will track if our timer is counting

// When the start button is clicked
startBtn.addEventListener('click', () => {
	timerCounting = true; // Set the timer counting to true
	startBtn.innerHTML = 'Start'; // Change the start button text to Start (Because it might be at resume if stopped was pressed before)
	timerCount(); // Start counting
});

// When the stop button is clicked
stopBtn.addEventListener('click', () => {
	timerCounting = false; // Set the timer counting to false
	startBtn.innerHTML = 'Resume'; // Change the start button text to resume
});

// When the reset button is clicked
resetBtn.addEventListener('click', () => {
	timerCounting = false; // Set the timer counting to false
	startBtn.innerHTML = 'Start'; // Change the start button text to Start (Because it might be at resume if stopped was pressed before)
	hourValue = 0; // Set the hour value to 0
	minuteValue = 0; // Set the minute value to 0
	secondValue = 0; // Set the second value to 0
	updateDisplay(); // Change the display to show all 0s
});

// This function counts our time
const timerCount = () => {
	if (!timerCounting) return; // If the timer is not counting then don't proceed

	secondValue++; // Increase the second value by one second

	// If the second value has reached one minute
	if (secondValue == 60) {
		minuteValue++; // Increase the minute by 1
		secondValue = 0; // Reset the seconds back to 0
	}

	// If the minute value has reach one hour
	if (minuteValue == 60) {
		hourValue++; // Increase the hour by 1
		minuteValue = 0; // Reset the minute to 0
	}

	updateDisplay(); // Show the new time values

	setTimeout(timerCount, 1000); // Count ever 1000ms (1 second)
};

// Show the new time values
const updateDisplay = () => {
	// If the hours are less than 10
	if (hourValue < 10) {
		hourDisplay.innerHTML = '0' + hourValue; // Add a 0 (as a string) in front of the value so the clock keeps the same display format
	} else {
		hourDisplay.innerHTML = hourValue; // Otherwise display the two digit value
	}

	// If the minutes are less than 10
	if (minuteValue < 10) {
		minuteDisplay.innerHTML = '0' + minuteValue; // Add a 0 (as a string) in front of the value so the clock keeps the same display format
	} else {
		minuteDisplay.innerHTML = minuteValue; // Otherwise display the two digit value
	}

	// If the seconds is less than 10
	if (secondValue < 10) {
		secondDisplay.innerHTML = '0' + secondValue; // Add a 0 (as a string) in front of the value so the clock keeps the same display format
	} else {
		secondDisplay.innerHTML = secondValue; // Otherwise display the two digit value
	}
};
