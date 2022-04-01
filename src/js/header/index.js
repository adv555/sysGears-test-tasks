import linkTpl from '../../templates/links.hbs';
const linksList = document.querySelector('#navLinks');

const data = [
  {
    id: 'dashboard',
    path: '/dashboard',
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

const getLinksList = () => {
  const markup = data.map(el => linkTpl(el)).join('');
  return markup;
};

const getActiveLink = () => {
  const links = document.querySelectorAll('#navLinks a');
  const current = location.pathname;

  links.forEach(link => {
    if (current === '/') {
      return;
    }
    link.getAttribute('href').indexOf(current) !== -1
      ? link.classList.add('link-active')
      : link.classList.add('link');
  });
};

const render = () => {
  linksList.innerHTML = '';
  linksList.innerHTML = getLinksList();
  getActiveLink();
};

render();
