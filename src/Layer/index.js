
export const LayerSeznam = (props) => {
  let result = '';
  props.items.forEach((item) => {
    result += Layer(item);
  });
  return result
};

const Layer = (props) => {
  return `<div class="layer">
  <div class="layer__color" style="background-color: ${props.color}"></div>
  <div class="layer__label">${props.label}</div>
</div>`
};



