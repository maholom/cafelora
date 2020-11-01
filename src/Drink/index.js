import { LayerSeznam } from "../Layer/index.js";

export const Drink = (props) => {
  const drinkElement = document.createElement('div');
  drinkElement.className = 'drink';
  drinkElement.innerHTML = `
  <div class="drink__product">
              <div class="drink__cup">
                <img src="/assets/cups/${props.id}.png" />
              </div>
              <div class="drink__info">
                <h3>${props.name}</h3>${LayerSeznam ({items:props.layers})}
            </div>
            </div>
            <div class="drink__controls">
              <button class="order-btn">Objednat</button>
            </div>`;

const btnElm = drinkElement.querySelector('.order-btn');
const drinkCup = drinkElement.querySelector('.drink__cup');

btnElm.addEventListener('click', () => {
    drinkCup.classList.toggle('drink__cup--selected');
  if (props.ordered === false) {
    btnElm.textContent = 'Zrušit';
  } else {
    btnElm.textContent = 'Objednat'
  }
  props.ordered = !props.ordered;})

/*const drinkInfo = drinkElement.querySelector('.drink__info');
drinkInfo.innerHTML += LayerSeznam ({items:props.layers})*/


return drinkElement;
}

