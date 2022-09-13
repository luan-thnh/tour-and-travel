const menu = document.querySelector('.app-nav');
const btnMenu = document.querySelector('.nav__icons');

btnMenu.addEventListener('click', () => {
  menu.classList.toggle('show');
  btnMenu.classList.toggle('active');
});

// if (window.screen.width <= 739) {

// }

// const a = document.querySelectorAll('section');

// a.forEach(e => {
//   e.setAttribute('data-aos', 'fade-up');
// });