const bg = document.querySelector(".bg");
const text = document.querySelector(".loading-text");
let load = 0;

let interval = setInterval(loading, 30);

function loading() {
  load++;
  if (load > 99) {
    clearInterval(interval);
  }
  text.innerText = `${load}%`;
  text.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}
const scale = (num, inMin, inMax, outMin, outMax) => {
  return ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};
