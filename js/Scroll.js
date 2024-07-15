// Show/hide back to top button
window.addEventListener("scroll", function () {
  const backToTopButton = document.querySelector(".back-to-top");
  if (window.scrollY > 200) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

$(document).ready(function () {
  // Smooth scrolling for internal links
  $("a[href^='#']").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });

  // Show/hide back to top button
  $(window).on("scroll", function () {
    const backToTopButton = $(".back-to-top");
    if ($(this).scrollTop() > 200) {
      backToTopButton.fadeIn();
    } else {
      backToTopButton.fadeOut();
    }
  });

  // Smooth scrolling for back to top button
  $(".back-to-top").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 800);
  });
});
