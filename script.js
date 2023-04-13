const daysAll = document.getElementById("days");
const hoursAll = document.getElementById("hours");
const minutesAll = document.getElementById("minutes");
const secondsAll = document.getElementById("seconds");

const halloween = "31 October 2023";

function countdown() {
  const halloweenDate = new Date(halloween);
  const currentDate = new Date();

  const everySecond = (halloweenDate - currentDate) / 1000;

  const days = Math.floor(everySecond / 3600 / 24);
  const hours = Math.floor(everySecond / 3600) % 24;
  const minutes = Math.floor(everySecond / 60) % 60;
  const seconds = Math.floor(everySecond) % 60;

  daysAll.innerHTML = formatTime(days);
  hoursAll.innerHTML = formatTime(hours);
  minutesAll.innerHTML = formatTime(minutes);
  secondsAll.innerHTML = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000);

