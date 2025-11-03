const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
navLinks.addEventListener('click', e => {
  if (e.target.tagName === 'A') navLinks.classList.remove('open');
});
