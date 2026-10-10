const menuButton = document.getElementById("menu-button");
const mobileNav = document.getElementById("mobile-nav");
const mobileLinks = document.querySelectorAll(".mobile-nav a");
const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

menuButton.addEventListener("click", () => {
  const isOpen = mobileNav.classList.toggle("is-open");

  menuButton.classList.toggle("is-open", isOpen);
  menuButton.setAttribute("aria-expanded", isOpen);
  menuButton.setAttribute(
    "aria-label",
    isOpen ? "Fermer le menu" : "Ouvrir le menu"
  );
});

mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("is-open");
    menuButton.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Ouvrir le menu");
  });
});