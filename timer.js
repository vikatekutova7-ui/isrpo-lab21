const timerDisplay = document.getElementById("timerDisplay");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");
let hours = 0;
let minutes = 0;
let seconds = 0;
let interval = null;
let isStart = false;
function updateDisplay() {
  const formatHour = hours.toString().padStart(2, "0");
  const formatMinute = minutes.toString().padStart(2, "0");
  const formatSecond = seconds.toString().padStart(2, "0");
  timerDisplay.textContent = `${formatHour}:${formatMinute}:${formatSecond}`;
}
function searchtime() {
  seconds++;
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes >= 60) {
    minutes = 0;
    hours++;
  }
  updateDisplay();
}
function startTimer() {
  if (!isStart) {
    interval = setInterval(searchtime, 1000);
    isStart = true;
  }
}
function stopTimer() {
  if (isStart) {
    clearInterval(interval);
    isStart = false;
  }
}
function resetTimer() {
  if (isStart) {
    clearInterval(interval);
    isStart = false;
  }
  hours = 0;
  minutes = 0;
  seconds = 0;
  updateDisplay();
}
startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);
  updateDisplay();