import tplNote from '../templates/note.hbs';
import tplStats from '../templates/stats.hbs';

let notes = [
  {
    id: '1',
    name: 'Shopping list',
    created: 'April 27,2021',
    category: 'Task',
    content: 'tomato, apple, juice',
    dates: [],
    archived: true,
  },
  {
    id: '2',
    name: 'The theory of evolution',
    created: 'April 27,2021',
    category: 'Random Thought',
    content: 'need to purchase',
    dates: [],
    archived: false,
  },
  {
    id: '3',
    name: 'New Feature',
    created: 'May 05,2021',
    category: 'Idea',
    content: 'deadline 05-06-2021',
    dates: ['05-06-2021'],
    archived: true,
  },
  {
    id: '4',
    name: 'William Gadis',
    created: 'May 07,2021',
    category: 'Random Thought',
    content: 'deadline 05-06-2021, 06-06-2021',
    dates: ['05-06-2021', '06-06-2021'],
    archived: false,
  },
  {
    id: '5',
    name: 'Books',
    created: 'May 15,2021',
    category: 'Random Thought',
    content: "Don't forget to read if you bought",
    dates: [],
    archived: false,
  },
  {
    id: '6',
    name: 'Just new task',
    created: 'May 15,2021',
    category: 'Task',
    content: 'Get ready for a new tasks',
    dates: [],
    archived: false,
  },
  {
    id: '7',
    name: 'Random Thought',
    created: 'May 15,2021',
    category: 'Idea',
    content: 'Create somethig...',
    dates: [],
    archived: false,
  },
];

// получаем активные заметки
export function getActive() {
  return notes
    .filter(item => !item.archived)
    .map(tplNote)
    .join('');
}

// добавляем заметки
export function addNote(name, category, message) {
  const note = {
    id: Date.now().toString(),
    name: name,
    created: getCreatedDate(),
    category: category,
    content: message,
    dates: getDates(message),
    archived: false,
  };

  notes = [...notes, note];
}

// удаляем заметки
export const deleteNote = id => {
  const newNotes = notes.filter(note => note.id !== id);
  return (notes = [...newNotes]);
};

// статистика
export const getStatistics = () =>
  notes
    .reduce((acc, note) => {
      const category = acc.find(cat => cat.name === note.category);

      if (!category) {
        return [
          ...acc,
          {
            name: note.category,
            active: note.archived ? 0 : 1,
            archived: note.archived ? 1 : 0,
          },
        ];
      }

      note.archived ? category.archived++ : category.active++;

      return acc;
    }, [])
    .map(tplStats)
    .join('');

// меняем статус archived
export const changeStatus = id => {
  const note = notes.find(note => note.id === id);
  note.archived = !note.archived;
};

// обновляем  заметку
export const updateNote = (id, name, category, message) => {
  const note = notes.find(note => note.id === id);

  note.name = name;
  note.category = category;
  note.content = message;
  note.dates = getDates(message);
};

export const getNoteById = id => {
  return notes.find(note => note.id === id);
};

// helpers
export const getDates = text => {
  let results = text.match(/[0-9]{1,2}([\-\/ \.])[0-9]{1,2}([\-\/ \.])((19)|(20))[0-9]{2}/g);

  if (!results) {
    return [];
  }
  return results;
};

export const getCreatedDate = () =>
  `${new Date().toLocaleString('en', {
    month: 'long',
    day: '2-digit',
  })}, ${new Date().getFullYear()} `;
