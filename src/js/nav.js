

const navToggle = document.getElementById('global-nav-toggle');
const globalNav = document.querySelector('.global-nav');

if (navToggle && globalNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!isOpen));
    globalNav.classList.toggle('open', !isOpen);
  });
}


document.querySelectorAll('.global-nav__split-button__toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const parentLi = btn.closest('li');
    const submenu = parentLi ? parentLi.querySelector('.global-nav__submenu') : null;

    const isRotated = btn.classList.toggle('rotated');

    if (submenu) {
      submenu.classList.toggle('open', isRotated);
    }
  });
});