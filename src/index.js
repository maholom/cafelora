import './index.html';
import './style.css';
import { Drink } from './Drink/index.js';


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

/*Ingredience jako komponenty

const suroviny = [
  {color: '#feeeca',
   label: 'mléčná pěna',
  }, 
{color: '#fed7b0', 
label: 'teplé mléko'
},
{color: '#613916',
label: 'espresso',
},]*/


/*Seznam napoju
const drinks = [
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    ordered: false,
    layers: [
      {
        color: '#feeeca',
        label: 'mléčná pěna',
      },
      {
        color: '#fed7b0',
        label: 'teplé mléko',
      },
      {
        color: '#613916',
        label: 'espresso',
      },
    ],
  },
  {
    id: 'romano',
    name: 'Romano',
    ordered: false,
    layers: [
      {
        color: '#fbdf5b',
        label: 'citrón',
      },
      {
        color: '#613916',
        label: 'espresso',
      },
    ],
  },
];

const Napojak = (props) => {
  const element = document.createElement('div');
  element.className = 'napojak';

  for (let i = 0; i < props.drinks.length; i += 1) {
    element.appendChild(Drink(props.drinks[i]));
  }
  return element;;
};


const container = document.querySelector('.drinks-list');
container.appendChild(Napojak({ drinks: drinks}));*/


const nacti = () => {
const container = document.querySelector('.drinks-list');
fetch('http://cafelora.kodim.cz/api/drinks')
.then((response) => response.json())
.then((data) => {
for (let i = 0; i < data.length; i++) {
container.appendChild(Drink(data[i]));
}});
};

nacti();
