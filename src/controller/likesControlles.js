const {
  getLikesDb,
  patchLikesDb,
  patchLikesPoDislikeDb,
  patchDisLikesDb,
  patchDislikeLikeDb,
  getLikesDbA,
  patchLikesDbA,
  patchDisLikesDbA,
  patchLikesPoDislikeDbA,
  patchDislikeLikeDbA,
} = require('../model/likesModel');

//----------------------------------------------
async function getLikes(req, res) {
  try {
    const { user_id, id_q } = req.params;

    const questArr = await getLikesDb(user_id, id_q);
    console.log('user_id, id_q', user_id, id_q);
    res.json(questArr);
  } catch (error) {
    console.log('error in getting Likes route ===', error);
    res.sendStatus(500);
  }
}
async function patchLikes(req, res) {
  try {
    const { user_id, id_q } = req.params;

    const questArr = await patchLikesDb(user_id, id_q);
    console.log('user_id, id_q', user_id, id_q);
    res.json(questArr);
  } catch (error) {
    console.log('error in getting Likes route ===', error);
    res.sendStatus(500);
  }
}
async function patchDisLikes(req, res) {
  try {
    const { user_id, id_q } = req.params;

    const questArr = await patchDisLikesDb(user_id, id_q);
    console.log('user_id, id_q', user_id, id_q);
    res.json(questArr);
  } catch (error) {
    console.log('error in getting Likes route ===', error);
    res.sendStatus(500);
  }
}
async function patchLikesPoDislike(req, res) {
  try {
    const { user_id, id_q } = req.params;

    const questArr = await patchLikesPoDislikeDb(user_id, id_q);
    console.log('user_id, id_q', user_id, id_q);
    res.json(questArr);
  } catch (error) {
    console.log('error in getting Likes route ===', error);
    res.sendStatus(500);
  }
}
async function patchDislikeLike(req, res) {
  try {
    const { user_id, id_q } = req.params;

    const questArr = await patchDislikeLikeDb(user_id, id_q);
    console.log('user_id, id_q', user_id, id_q);
    res.json(questArr);
  } catch (error) {
    console.log('error in getting Likes route ===', error);
    res.sendStatus(500);
  }
}
//-------------------------------------------------------------------------------ANSWERS
async function getLikesA(req, res) {
  try {
    const { user_id, id_a } = req.params;

    const questArr = await getLikesDbA(user_id, id_a);
    console.log('user_id, id_a', user_id, id_a);
    res.json(questArr);
  } catch (error) {
    console.log('error in getting Likes route ===', error);
    res.sendStatus(500);
  }
}
async function patchLikesA(req, res) {
  try {
    const { user_id, id_a } = req.params;

    const questArr = await patchLikesDbA(user_id, id_a);
    console.log('user_id, id_a', user_id, id_a);
    res.json(questArr);
  } catch (error) {
    console.log('error in getting Likes route ===', error);
    res.sendStatus(500);
  }
}
async function patchDisLikesA(req, res) {
  try {
    const { user_id, id_a } = req.params;

    const questArr = await patchDisLikesDbA(user_id, id_a);
    console.log('user_id, id_a', user_id, id_a);
    res.json(questArr);
  } catch (error) {
    console.log('error in getting Likes route ===', error);
    res.sendStatus(500);
  }
}
async function patchLikesPoDislikeA(req, res) {
  try {
    const { user_id, id_a } = req.params;

    const questArr = await patchLikesPoDislikeDbA(user_id, id_a);
    console.log('user_id, id_a', user_id, id_a);
    res.json(questArr);
  } catch (error) {
    console.log('error in getting Likes route ===', error);
    res.sendStatus(500);
  }
}
async function patchDislikeLikeA(req, res) {
  try {
    const { user_id, id_a } = req.params;

    const questArr = await patchDislikeLikeDbA(user_id, id_a);
    console.log('user_id, id_a', user_id, id_a);
    res.json(questArr);
  } catch (error) {
    console.log('error in getting Likes route ===', error);
    res.sendStatus(500);
  }
}
//-----------------------------
module.exports = {
  getLikes,
  patchLikes,
  patchLikesPoDislike,
  patchDisLikes,
  patchDislikeLike,
  getLikesA,
  patchLikesA,
  patchLikesPoDislikeA,
  patchDisLikesA,
  patchDislikeLikeA,
};
