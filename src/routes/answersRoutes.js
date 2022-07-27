const express = require('express');
const {
  getAnswers,
  postAnswers,
  editAnswers,
  deleteAnswers,
} = require('../controller/answerController');

const { validateToken } = require('../middleware');

// -------------------------------------------

const answersRoutes = express.Router();

// ------------------------------------------
answersRoutes.get('/questions/:id_q/answers', getAnswers);

answersRoutes.post('/questions/:id_q/answers', validateToken, postAnswers);

answersRoutes.patch('/answers/:id_a', validateToken, editAnswers);

answersRoutes.patch('/answers/d/:id_a', validateToken, deleteAnswers);
// -------------------------------------------
module.exports = answersRoutes;
