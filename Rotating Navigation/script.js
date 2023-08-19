const open = document.getElementById("open");
const close = document.getElementById("close");
const container = document.querySelector(".container");

open.addEventListener("click", () => {
  container.classList.add("show-nav");
  console.log("i am clicked");
});

close.addEventListener("click", () => {
  container.classList.remove("show-nav");
  console.log("i am clicked");
});
