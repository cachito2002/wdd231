export function enableNavigation() {
  enableMainToggle();
  enableSubmenuToggles();
}

function enableMainToggle() {
  const toggle = document.querySelector("#global-nav-toggle");
  const nav = document.querySelector(".global-nav");

  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Close Menu" : "Open Menu");
  });
}

function enableSubmenuToggles() {
  const buttons = document.querySelectorAll(".global-nav__split-button__toggle");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const li = button.closest("li");
      const submenu = li.querySelector(".global-nav__submenu");

      if (!submenu) return;

      const isOpen = submenu.classList.toggle("open");
      button.classList.toggle("rotated", isOpen);
    });
  });
}