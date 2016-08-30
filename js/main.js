var menu = document.getElementById('menu');
var navLinks = document.getElementsByClassName('nav-links-wrapper');
var navLink = document.getElementsByClassName('nav-link');

function toggleMenu () {
  if (window.innerWidth <= 800) {
    menu.classList.toggle('is-open');
    navLinks[0].classList.toggle('nav-open');
  }
}

menu.onclick = function () {
  toggleMenu();
}

for (i = 0; i < navLink.length; i++) {
  navLink[i].addEventListener('click', function() {
    toggleMenu();
  });
}
