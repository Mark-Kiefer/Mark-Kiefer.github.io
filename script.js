// year update
const currentYear = new Date().getFullYear();
document.getElementById('current_year').textContent = currentYear;

// scroll listener
document.addEventListener('DOMContentLoaded', function() {

    // Select the link element
    var scrollLinks = document.querySelectorAll('.scroll-link');

    // Attach click event listeners to each link
    scrollLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default behavior

            var targetId = this.getAttribute('href'); // Get target id from href attribute
            var targetElement = document.querySelector(targetId); // Find target element

            if (targetElement) {

                // Calculate target position
                var targetOffset = targetElement.offsetTop;
                var headerOffset = 0; // Adjust this value if you have a fixed header

                if (targetId == "#experience"){
                    targetOffset = targetOffset + 175;

                }

                // Scroll to target position smoothly
                window.scrollTo({
                    top: targetOffset - headerOffset,
                    behavior: 'smooth'
                });
            }
        });
    });
});
