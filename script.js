
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

// Mobile navigation menu
menuBtn.addEventListener("click", function () {
  const isOpen = navLinks.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(isOpen));
});

// Close menu after selecting a navigation link
navLinks.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

// Display the current year in the footer
document.getElementById("year").textContent =
  new Date().getFullYear();

// Contact form: opens the visitor's email application
document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("visitorName").value.trim();
  const email = document.getElementById("visitorEmail").value.trim();
  const message = document.getElementById("visitorMessage").value.trim();

  const subject = encodeURIComponent("Portfolio message from " + name);

  const body = encodeURIComponent(
    "Name: " + name +
    "\nEmail: " + email +
    "\n\nMessage: " + message
  );

  window.location.href =
    "mailto:dpoovika@gmail.com?subject=" + subject + "&body=" + body;
});
