const toTopBtn = document.querySelector(".top-btn");

toTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
