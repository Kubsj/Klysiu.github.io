let cube = document.querySelector("c-cube");
let x = 0;
let y = 0;
let interval = -1;
let speed = 50;
setInterval(nextFrame, speed);

function nextFrame() {
  x += interval;
  y -= interval;
  document.documentElement.style.setProperty("--rX", x + "deg");
  document.documentElement.style.setProperty("--rY", y + "deg");
}
