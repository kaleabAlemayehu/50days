const panels = document.querySelectorAll(".panel");

panels.forEach((e) => {
  e.addEventListener("click", (e) => {
    panels.forEach((e) => {
      e.classList.remove("active");
    });
    e.target.classList.add("active");
  });
});
