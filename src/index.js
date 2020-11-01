import './index.html';
import './style.css';

console.log('funguju!');

/*Zprovoznění navigace*/

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

/*Objednávání nápojů*/
const drinkCup = document.querySelector('.drink__cup');
const orderBtn = document.querySelector('.order-btn');
let ordered = false

orderBtn.addEventListener('click', () => {
  drinkCup.classList.toggle('drink__cup--selected');
  if (ordered === false) {
    orderBtn.textContent = 'Zrušit';
  } else {
    orderBtn.textContent = 'Objednat'
  }
  ordered = !ordered;
});





