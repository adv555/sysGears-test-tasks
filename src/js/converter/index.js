import { distance } from '../../data/converter.json';
import optionsTpl from '../../templates/options.hbs';
const selectFrom = document.querySelector('#from');
const selectTo = document.querySelector('#to');

const getSelectOptions = () => {
  const markup = distance.units.map(el => `<option value=${el}>${el}</option>`);

  return markup;
};

// when user click on reset button
function clearVal() {
  window.location.reload();
  document.getElementsByClassName('finalValue').innerHTML = '';
}

const render = () => {
  selectFrom.insertAdjacentHTML('beforeend', getSelectOptions());
  selectTo.insertAdjacentHTML('beforeend', getSelectOptions());
};
render();
