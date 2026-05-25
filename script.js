const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");
const time = document.getElementById("time");

let seconds = 0;
let minutes = 0;
let hours = 0;
let isRunning = null;

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

  const formattedHours = String(hours).padStart(2, "0");
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");

  time.innerText = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
};

const startTimer = () => {
  if (isRunning) return;
  isRunning = setInterval(updateTime, 1000);
};

const stopTimer = () => {
  clearInterval(isRunning);
  isRunning = null;
};

const resetTimer = () => {
  clearInterval(isRunning);

  isRunning = null;

  hours = 0;
  minutes = 0;
  seconds = 0;

  time.innerText = "00:00:00";
};

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);
