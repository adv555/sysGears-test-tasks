// include api for currency change
const api = 'https://api.exchangerate-api.com/v4/latest/USD';

// for selecting different controls
const search = document.querySelector('.searchBox');
const convert = document.querySelector('.convert');
const fromCurrency = document.querySelector('.from');
const toCurrency = document.querySelector('.to');
const finalValue = document.querySelector('.finalValue');
const finalAmount = document.getElementById('finalAmount');
const resetBtn = document.querySelector('.reset');
let resultFrom;
let resultTo;
let searchValue;

// Event when currency is changed
fromCurrency.addEventListener('change', event => {
  resultFrom = `${event.target.value}`;
});

// Event when currency is changed
toCurrency.addEventListener('change', event => {
  resultTo = `${event.target.value}`;
});

search.addEventListener('input', updateValue);

// function for updating value
function updateValue(e) {
  searchValue = e.target.value;
}

// when user clicks, it calls function getResults & reset
convert.addEventListener('click', getResults);
resetBtn.addEventListener('click', clearVal);

// function getResults
function getResults() {
  fetch(`${api}`)
    .then(currency => {
      return currency.json();
    })
    .then(displayResults);
}

// display results after conversion
function displayResults(currency) {
  let fromRate = currency.rates[resultFrom];
  let toRate = currency.rates[resultTo];

  searchValue && toRate && fromRate
    ? (finalValue.innerHTML = ((toRate / fromRate) * searchValue).toFixed(2))
    : (finalValue.innerHTML = `<span class="text-red-600">enter your amount</span>`);
  finalAmount.classList.remove('hidden');
}

// when user click on reset button
function clearVal() {
  window.location.reload();
  document.getElementsByClassName('finalValue').innerHTML = '';
}
