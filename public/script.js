document.addEventListener('DOMContentLoaded', function() {
    const exerciseLinks = document.querySelectorAll('.exercise-link');

    exerciseLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default link behavior
            this.classList.add('clicked'); // Add a class to indicate that the link has been clicked
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const navButtons = document.querySelectorAll(".nav-btn");

    navButtons.forEach(button => {
        button.addEventListener("click", function() {
            const sectionId = this.getAttribute("data-section");
            const section = document.getElementById(sectionId);

            if (section) {
                section.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });
});

// Back to Top Button Functionality
const backToTopBtn = document.getElementById("back-to-top-btn");

backToTopBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Show Back to Top Button on Scroll
window.addEventListener("scroll", function() {
    if (window.scrollY > 100) {
        backToTopBtn.classList.add("show");
    } else {
        backToTopBtn.classList.remove("show");
    }
});

function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  