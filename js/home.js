window.addEventListener("scroll", function () {
  const backToTopButton = document.querySelector(".back-to-top");
  if (window.scrollY > 0) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});
