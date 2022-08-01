const express = require('express');
const {
  getQuestions,
  postQuestion,
  editQuestion,
  deleteQuestion,
  likeQuestion,
  dislikeQuestion,
  getQuestionsById,
  getQuestionsByUserId,
  addQuestionAnswersCount,

  //   counterDislikeQuestion,
} = require('../controller/questionsController');

const { validateToken } = require('../middleware');

// -------------------------------------------

const questionsRoutes = express.Router();

// ------------------------------------------
questionsRoutes.get('/questions', getQuestions);

questionsRoutes.post('/questions', validateToken, postQuestion);

//--------------------

questionsRoutes.patch('/questions/likes', validateToken, likeQuestion);

questionsRoutes.patch('/questions/dislikes', validateToken, dislikeQuestion);

// questionsRoutes.patch('/questions/dis/counts', validateToken, counterDislikeQuestion);

questionsRoutes.patch('/questions/answers/count', validateToken, addQuestionAnswersCount);

questionsRoutes.patch('/questions/:id_q', validateToken, editQuestion);

questionsRoutes.delete('/questions/:id_q', validateToken, deleteQuestion);

questionsRoutes.get('/questions/:id_q', getQuestionsById);

questionsRoutes.get('/private/questions/:user_id', getQuestionsByUserId);

// -------------------------------------------
module.exports = questionsRoutes;
