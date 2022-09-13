window.addEventListener('scroll', () => {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    const arr = document.querySelectorAll("#myImg");

    arr.forEach(el => el.classList.add('slideUp'));
  }
});