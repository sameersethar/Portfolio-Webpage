/* Typed headline - keep only ONE init (you had it duplicated) */
new Typed("#typed", {
  strings: ["Web Developer", "UI/UX Designer", "Programmer"],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true
});

/* Mobile menu toggle */
const toggleBtn = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

if (toggleBtn && nav) {
  toggleBtn.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggleBtn.setAttribute("aria-expanded", String(isOpen));
  });

  // Close menu when a link is clicked (nice on mobile)
  nav.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      nav.classList.remove("open");
      toggleBtn.setAttribute("aria-expanded", "false");
    });
  });
}
