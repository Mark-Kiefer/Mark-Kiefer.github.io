// year update
const currentYear = new Date().getFullYear();
document.getElementById("current_year").textContent = currentYear;

// scroll listener
document.addEventListener("DOMContentLoaded", function () {
  // Select the link element
  var scrollLinks = document.querySelectorAll(".scroll-link");

  // Attach click event listeners to each link
  scrollLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent default behavior

      var targetId = this.getAttribute("href"); // Get target id from href attribute
      var targetElement = document.querySelector(targetId); // Find target element

      if (targetElement) {
        // Calculate target position
        var targetOffset = targetElement.offsetTop;
        var headerOffset = 0; // Offset for fixed header

        if (targetId == "#skill") {
          targetOffset = targetOffset + 200; // Additional offset for skill section
        }

        if (targetId == "#top") {
          targetOffset = targetOffset - 70; // Additional offset for top section
        }

        // Scroll to target position smoothly
        window.scrollTo({
          top: targetOffset - headerOffset,
          behavior: "smooth",
        });
      }
    });
  });
});

// function for scroll behavior with main image
function scrollFunction() {
  var scroll = window.scrollY;

  var outer = document.getElementById("bg");

  var m = -0.5;
  var b = 0;

  var newTop = m * scroll + b;

  outer.style.backgroundPositionY = newTop + "px";
}

window.addEventListener("scroll", scrollFunction);
