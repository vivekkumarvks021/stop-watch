// Selecting buttons and timer element from HTML
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");
const time = document.getElementById("time");

// Variables to store time values
let seconds = 0;
let minutes = 0;
let hours = 0;

// Variable to store setInterval reference
let isRunning = null;

// This function runs every second
const updateTime = () => {
  seconds++;

  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }

  if (minutes === 60) {
    minutes = 0;
    hours++;
  }

  // Convert single digit numbers into 2-digit format
  // Example: 5 -> 05
  const formattedHours = String(hours).padStart(2, "0");
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");

  // Display updated time on UI
  time.innerText = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
};

// Function to start the timer
const startTimer = () => {
  if (isRunning) return;

  // Run updateTime function every 1 second
  isRunning = setInterval(updateTime, 1000);
};

// Function to stop the timer
const stopTimer = () => {
  clearInterval(isRunning);
  isRunning = null;
};

// Function to reset the timer
const resetTimer = () => {
  clearInterval(isRunning);

  isRunning = null;

  hours = 0;
  minutes = 0;
  seconds = 0;

  // Reset UI time display
  time.innerText = "00:00:00";
};

// Add click events to buttons
startBtn.addEventListener("click", startTimer);

stopBtn.addEventListener("click", stopTimer);

resetBtn.addEventListener("click", resetTimer);
