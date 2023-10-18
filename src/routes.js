const {
  addNoteHandler,
  getNoteData,
  getDataById,
  editNoteHandler,
  deleteDataById,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },
  {
    method: 'GET',
    path: '/notes',
    handler: getNoteData,
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getDataById,
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNoteHandler,
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteDataById,
  },
];
module.exports = routes;
