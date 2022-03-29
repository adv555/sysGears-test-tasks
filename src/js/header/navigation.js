import linkTpl from '../../templates/links.hbs';
const linksList = document.querySelector('#navLinks');

const data = [
  {
    id: 'dashboard',
    path: '/',
    title: 'Dashboard',
  },
  {
    id: 'converter',
    path: '/converter',
    title: 'Converter',
  },
  {
    id: 'sorting',
    path: '/sorting',
    title: 'Sorting',
  },
  {
    id: 'questionnaire',
    path: '/questionnaire',
    title: 'Questionnaire',
  },
  {
    id: 'algorithm',
    path: '/algorithm',
    title: 'Algorithm',
  },
];

const getLinks = () => {
  const markup = data.map(el => linkTpl(el)).join('');
  return markup;
};

const render = () => {
  linksList.innerHTML = '';
  linksList.innerHTML = getLinks();
};

render();
