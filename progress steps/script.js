const btnNext = document.querySelector(".next");
const btnPrev = document.querySelector(".prev");
const numbers = document.querySelectorAll(".circle");
const progressBar = document.querySelector(".progress");

btnPrev.disabled = true;
let page = 1;
btnNext.addEventListener("click", nextHandler);

btnPrev.addEventListener("click", prevHandler);

function nextHandler() {
  page++;
  if (page > numbers.length) {
    page = numbers.length;
  }
  update();
}

function prevHandler() {
  page--;
  if (page < 1) {
    page = 1;
  }
  update();
}

function update() {
  numbers.forEach((number, index) => {
    if (index < page) {
      number.classList.add("active");
    } else {
      number.classList.remove("active");
    }
  });

  const active = document.querySelectorAll(".active");
  if (page == 1) {
    btnPrev.disabled = true;
  } else if (page == numbers.length) {
    btnNext.disabled = true;
  } else {
    btnNext.disabled = false;
    btnPrev.disabled = false;
  }
  progressBar.style.width = `${Number.parseInt(
    ((active.length - 1) / (numbers.length - 1)) * 100
  )}%`;
}
