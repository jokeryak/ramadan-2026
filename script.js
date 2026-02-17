const ramadanDate = new Date("February 19, 2026 00:00:00").getTime();

const timer = setInterval(function () {

  const now = new Date().getTime();
  const distance = ramadanDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

  if (distance < 0) {
    clearInterval(timer);
    document.querySelector(".countdown").innerHTML = "Ramadan Mubarak!";
  }

}, 1000);

function showTodayDate() {
  const today = new Date();

  const options = { 
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };

  const formattedDate = today.toLocaleDateString('en-US', options);

  document.getElementById("todayDate").innerText = 
    "Today: " + formattedDate;
}

showTodayDate();