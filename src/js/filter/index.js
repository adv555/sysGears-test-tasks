import userData from '../../data/filter.json';
import tdData from '../../templates/td.hbs';
const dataBlock = document.querySelector('.data');
const categoryFilter = document.getElementById('category');
const sortBy = document.getElementById('sortBy');
const statusFilter = document.getElementById('status');

const getFiltersMarkup = () => {
  const { category, status, rating } = userData.filters;
  const categoryMarkup = category.map(el => `<option >${el}</option>`);
  const ratingMarkup = rating.map(el => `<option >${el}</option>`);
  const statusMarkup = status.map(el => `<option >${el}</option>`);
  categoryFilter.insertAdjacentHTML('beforeend', categoryMarkup);
  sortBy.insertAdjacentHTML('beforeend', ratingMarkup);
  statusFilter.insertAdjacentHTML('beforeend', statusMarkup);
};
const getData = () => {
  const { data } = userData;
  const markup = data.map(el => tdData(el)).join('');
  dataBlock.innerHTML = '';
  dataBlock.innerHTML = markup;
};

function getSortedData(data, condition) {
  console.log(data);
  console.log(condition);
}

const renderData = () => {
  getFiltersMarkup();
  getData();
};

renderData();
