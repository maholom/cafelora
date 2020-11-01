import './index.html';
import './style.css';

console.log('funguju!');

const navBtn = document.querySelector('#nav-btn');
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll ('nav a')
console.log(navLinks);

navBtn.addEventListener('click' , () => {
  nav.classList.toggle('nav-closed');
});

navLinks.forEach((navLink) => {
  navLink.addEventListener('click', () => {
    nav.classList.toggle('nav-closed')
  })
});

