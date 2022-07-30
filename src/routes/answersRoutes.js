const express = require('express');
const {
  getAnswers,
  postAnswers,
  editAnswers,
  deleteAnswers,
  likeAnswer,
  dislikeAnswer,
  getAnswersByUserId,
} = require('../controller/answerController');

const { validateToken } = require('../middleware');

// -------------------------------------------

const answersRoutes = express.Router();

// ------------------------------------------
answersRoutes.get('/questions/:id_q/answers', getAnswers);

answersRoutes.post('/questions/:id_q/answers', validateToken, postAnswers);

answersRoutes.patch('/answers/likes', validateToken, likeAnswer);

answersRoutes.patch('/answers/dislikes', validateToken, dislikeAnswer);

answersRoutes.patch('/answers/:id_a', validateToken, editAnswers);

answersRoutes.delete('/answers/:id_a', validateToken, deleteAnswers);

answersRoutes.get('/private/answers/:user_id', validateToken, getAnswersByUserId);

// -------------------------------------------
module.exports = answersRoutes;
