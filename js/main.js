const year = document.querySelector("#year");
const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const countdown = document.querySelector("#countdown");
const preloader = document.querySelector("#preloader");

// делаем расчеты какой год следующий
const currentYear = new Date().getFullYear();
const nextYear = new Date(`January 01 ${currentYear + 1} 00:00:00`);

// устанавливаем год на страницу
year.innerText = currentYear + 1;

function updateCounter() {
  const currentTime = new Date();

  const diff = nextYear - currentTime;

  // перевод в дни
  const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);
  // перевод в часы
  const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;
  // перевод в минуты
  const minutesLeft = Math.floor(diff / 1000 / 60) % 60;
  // перевод в секунды
  const secondsLeft = Math.floor(diff / 1000) % 60;

  days.innerText = daysLeft;
  hours.innerText = hoursLeft < 10 ? "0" + hoursLeft : hoursLeft;
  minutes.innerText = minutesLeft < 10 ? "0" + minutesLeft : minutesLeft;
  seconds.innerText = secondsLeft < 10 ? "0" + secondsLeft : secondsLeft;
}

setInterval(updateCounter, 1000);

setTimeout(function () {
  preloader.remove();
  countdown.style.display = "flex";
}, 1000);
