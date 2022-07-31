const {
  getLikesDb,
  patchLikesDb,
  patchLikesPoDislikeDb,
  patchDisLikesDb,
  patchDislikeLikeDb,
} = require('../model/likesModel');

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
//-----------------------------
module.exports = {
  getLikes,
  patchLikes,
  patchLikesPoDislike,
  patchDisLikes,
  patchDislikeLike,
};
