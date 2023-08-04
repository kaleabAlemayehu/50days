const btnNext = document.querySelector(".next");
const btnPrev = document.querySelector(".prev");
const numbers = document.querySelectorAll(".circle");
const progressBar = document.querySelector(".progress");
const progress = {
  1: 0,
  2: 34,
  3: 68,
  4: 100,
};

btnPrev.disabled = true;
let page = 1;
btnNext.addEventListener("click", nextHandler);

btnPrev.addEventListener("click", prevHandler);

function removeActive() {
  numbers.forEach((number) => {
    number.classList.remove("active");
  });
}

function addActive() {
  numbers.forEach((number, index) => {
    if (index < page && page < 5) {
      number.classList.add("active");
    }
  });
}

function nextHandler() {
  if (page < 4) {
    page++;

    btnPrev.disabled = false;
    if (page == 4) {
      btnNext.disabled = true;
    }
    progresser();
    removeActive();
    addActive();
  }
}

function prevHandler() {
  if (page > 1) {
    page--;
    btnNext.disabled = false;
    if (page == 1) {
      btnPrev.disabled = true;
    }
    progresser();
    removeActive();
    addActive();
  }
}

function progresser() {
  progressBar.style.width = `${progress[page]}%`;
}
