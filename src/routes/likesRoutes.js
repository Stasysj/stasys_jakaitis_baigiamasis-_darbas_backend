const express = require('express');
const {
  getLikes,
  patchLikes,
  patchLikesPoDislike,
  patchDisLikes,
  patchDislikeLike,
} = require('../controller/likesControlles');
const { validateToken } = require('../middleware');

// -------------------------------------------

const likesRoutes = express.Router();

// ------------------------------------------
likesRoutes.get('/questions/likes/:user_id/:id_q', getLikes);

likesRoutes.patch('/questions/likes/dislikes/:user_id/:id_q', validateToken, patchLikesPoDislike);

likesRoutes.patch('/questions/likes/2/dislikes/:user_id/:id_q', validateToken, patchDislikeLike);

likesRoutes.patch('/questions/likes/:user_id/:id_q', validateToken, patchLikes);

likesRoutes.patch('/questions/likes/2/:user_id/:id_q', validateToken, patchDisLikes);

// -------------------------------------------
module.exports = likesRoutes;
