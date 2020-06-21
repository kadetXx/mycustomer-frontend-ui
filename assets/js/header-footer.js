document.querySelector('.hamburger__menu').addEventListener('click', showMobileMenu);
document.querySelector('.close-mobile-menu').addEventListener('click', closeMobileMenu);

function showMobileMenu(params) {
  document.querySelector('#mobile-menu').classList.add('mobile-menu-active')
}

function closeMobileMenu(params) {
  document.querySelector('#mobile-menu').classList.remove('mobile-menu-active')
}