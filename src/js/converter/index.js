import { distance } from '../../data/converter.json';
const searchLength = document.querySelector('#amount');
const selectFrom = document.querySelector('#from');
const selectTo = document.querySelector('#to');
const submitBtn = document.querySelector('.submit');
const resetBtn = document.querySelector('.reset');
const finalAmountBlock = document.querySelector('.finalAmountBlock');
const finalAmountValue = document.querySelector('.finalAmountValue');

let value;
let fromUnit;
let toUnit;

searchLength.addEventListener('input', event => (value = event.target.value));
selectFrom.addEventListener('change', event => (fromUnit = event.target.value));
selectTo.addEventListener('change', event => (toUnit = event.target.value));

submitBtn.addEventListener('click', displayResults);
resetBtn.addEventListener('click', resetForm);

// when user click on submit button
function displayResults() {
  const from = distance.rate[fromUnit];
  const to = distance.rate[toUnit];

  value && to && from
    ? (finalAmountValue.innerHTML = ((to / from) * value).toFixed(2))
    : (finalAmountValue.innerHTML = `<span class="text-red-600">enter your amount</span>`);

  finalAmountBlock.classList.remove('hidden');
}

// when user click on reset button
function resetForm() {
  window.location.reload();
  document.getElementsByClassName('finalAmountValue').innerHTML = '';
}
// select options
const getSelectOptions = () => {
  const markup = distance.units.map(el => `<option value=${el}>${el}</option>`);
  return markup;
};

const render = () => {
  selectFrom.insertAdjacentHTML('beforeend', getSelectOptions());
  selectTo.insertAdjacentHTML('beforeend', getSelectOptions());
};
render();
