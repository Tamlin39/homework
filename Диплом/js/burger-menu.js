const header = document.querySelector(".header");
const burger = document.querySelector(".header__burger");
const closeButton = document.querySelector(".header__close");
const overlay = document.querySelector(".header__overlay");
const mobileMenu = document.querySelector(".header__mobile-menu");
const mobileLinks = document.querySelectorAll(".header__mobile-list a");

function openMenu() {
  header.classList.add("menu-open");
  burger.setAttribute("aria-expanded", "true");
  burger.setAttribute("aria-label", "Закрыть меню");
  mobileMenu.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeMenu() {
  header.classList.remove("menu-open");
  burger.setAttribute("aria-expanded", "false");
  burger.setAttribute("aria-label", "Открыть меню");
  mobileMenu.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

burger.addEventListener("click", () => {
  if (header.classList.contains("menu-open")) {
    closeMenu();
  } else {
    openMenu();
  }
});

closeButton.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

mobileLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});
