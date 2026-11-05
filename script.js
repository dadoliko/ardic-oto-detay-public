"use strict";

// JavaScript kapalıyken bağlantılar görünür kalır.
const menuButton = document.querySelector(".menu-toggle");
const menu = document.querySelector("#ana-menu");

if (menuButton && menu) {
  const mobileScreen = window.matchMedia("(max-width: 760px)");
  menu.dataset.collapsible = "true";
  menuButton.hidden = false;

  function closeMenu(returnFocus = false) {
    menu.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
    if (returnFocus) menuButton.focus();
  }

  menuButton.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  menu.addEventListener("click", (event) => {
    const link = event.target.closest("a");
    if (!link || !mobileScreen.matches) return;
    const target = document.querySelector(link.getAttribute("href"));
    closeMenu();
    // Gizlenen menüde klavye odağı bırakmadan hedef bölüme taşı.
    if (target) {
      target.setAttribute("tabindex", "-1");
      target.focus({ preventScroll: true });
      target.addEventListener("blur", () => target.removeAttribute("tabindex"), { once: true });
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menu.classList.contains("is-open")) closeMenu(true);
  });
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".site-header")) closeMenu();
  });
  mobileScreen.addEventListener("change", () => {
    const focusWouldBeHidden = mobileScreen.matches && menu.contains(document.activeElement);
    closeMenu(focusWouldBeHidden);
  });
}
