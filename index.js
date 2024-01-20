let hour = document.querySelector(".hours");
let minute = document.querySelector(".minutes");
let second = document.querySelector(".seconds");

setInterval(() => {
  let time = new Date();

  hour.innerHTML = (time.getHours() < 10 ? "0" : "") + time.getHours();
  minute.innerHTML = (time.getMinutes() < 10 ? "0" : "") + time.getMinutes();
  second.innerHTML = (time.getSeconds() < 10 ? "0" : "") + time.getSeconds();
}, 1000);
