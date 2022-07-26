const express = require('express');
const { getQuestions, postQuestion, editQuestion } = require('../controller/questionsController');

const { validateToken } = require('../middleware');

// -------------------------------------------

const questionsRoutes = express.Router();

// ------------------------------------------
questionsRoutes.get('/questions', getQuestions);

questionsRoutes.post('/questions', validateToken, postQuestion);

questionsRoutes.patch('/questions/:id_q', validateToken, editQuestion);

// -------------------------------------------
module.exports = questionsRoutes;
