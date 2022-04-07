import linkTpl from '../../templates/links.hbs';
const linksList = document.querySelector('#navLinks');
const pageTitle = document.querySelector('.page-title');
const pages = document.querySelectorAll('#pages .page');

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
    id: 'filter',
    path: '/filter',
    title: 'Filter',
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

const getActivePage = () => {
  const links = document.querySelectorAll('#navLinks a');
  const current = location.pathname.split('/')[1];

  links.forEach(link => {
    if (current === '') {
      return;
    }
    link.getAttribute('href').indexOf(current) !== -1
      ? link.classList.add('link-active')
      : link.classList.add('link');
  });

  data.forEach(({ title }) => title.toLowerCase() === current && (pageTitle.textContent = title));

  pages.forEach(page =>
    !page.classList.contains(current)
      ? page.classList.add('hidden')
      : page.classList?.remove('hidden'),
  );
};

const render = () => {
  linksList.innerHTML = '';
  linksList.innerHTML = getLinksList();

  getActivePage();
};

render();
