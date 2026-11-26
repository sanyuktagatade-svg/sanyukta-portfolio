// Mobile-friendly navigation and smooth scrolling
document.addEventListener("DOMContentLoaded", function () {
  // Display current year in footer
  const yearElement = document.getElementById("year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Contact form interaction
  const contactForm = document.getElementById("contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
      }

      alert("Thank you, " + name + "! Your message has been received.");

      contactForm.reset();
    });
  }

  // Highlight active navigation link while scrolling
  const sections = document.querySelectorAll("main section");
  const navLinks = document.querySelectorAll("nav a");

  window.addEventListener("scroll", function () {
    let currentSection = "";

    sections.forEach(function (section) {
      if (window.scrollY >= section.offsetTop - 150) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach(function (link) {
      link.classList.toggle(
        "active",
        link.getAttribute("href") === "#" + currentSection
      );
    });
  });
});
