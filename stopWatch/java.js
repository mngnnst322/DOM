// const timerdisplay = document.gueryselector(`.Timerdisplay`);
const stopbtn = document.getElementById("stopbtn");
const startbtn = document.getElementById("startbtn");
const resetbtn = document.getElementById("resetbtn");
const timer = document.getElementById("timerdisplay");

let interval = null;
let time = 0;

const formatTime = (startTime) => {
  const hours = Math.floor(startTime / 3600)
    .toString()
    .padStart(2, "0");
  const minutes = Math.floor((startTime % 3600) / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (startTime % 60).toString().padStart(2, "0");

  return `${hours}:${minutes}:${seconds}`;
};
startbtn.addEventListener("click", () => {
  if (interval === null) {
    interval = setInterval(() => {
      time++;
      timer.textContent = formatTime(time);
    }, 1000);
  } else {
    alert("Timer already started");
  }
});
stopbtn.addEventListener("click", () => {
  clearInterval(interval);
  interval = null;
});
resetbtn.addEventListener("click", () => {
  clearInterval(interval);
  interval = null;
  time = 0;
  timer.textContent = "00:00:00";
});
