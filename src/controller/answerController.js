const {
  getAnswersDb,
  postAnswersDb,
  editAnswersDb,
  deleteAnswersDb,
  likeAnswersDb,
  dislikeAnswersDb,
  getAnswersByUserIdDb,
  getAnswerByAnswerIddDb,
  deleteAnswersByquestionIdDb,
} = require('../model/answerModel');

// ------------------------------------------
async function getAnswers(req, res) {
  try {
    const { id_q } = req.params;

    const questArr = await getAnswersDb(id_q);
    res.json(questArr);
  } catch (error) {
    console.log('error in getting Answers route ===', error);
    res.sendStatus(500);
  }
}
async function getAnswersByUserId(req, res) {
  try {
    const { user_id } = req.params;

    const questArr = await getAnswersByUserIdDb(user_id);
    res.json(questArr);
  } catch (error) {
    console.log('error in getting Answers route ===', error);
    res.sendStatus(500);
  }
}
async function getAnswerByAnswerId(req, res) {
  try {
    const { id_a } = req.params;

    const questArr = await getAnswerByAnswerIddDb(id_a);
    res.json(questArr);
  } catch (error) {
    console.log('error in getting Answers route ===', error);
    res.sendStatus(500);
  }
}

async function postAnswers(req, res) {
  const { user_id, body_a, add_time_a, add_time_mili_a } = req.body;
  const { id_q } = req.params;
  console.log('id_q, body_a, user_id', id_q, body_a, user_id);
  try {
    const saveResult = await postAnswersDb(id_q, body_a, user_id, add_time_a, add_time_mili_a);
    if (saveResult.affectedRows === 1) {
      res.status(201).json('Answer successfully added');
      return;
    }
    res.status(400).json('Error in adding new Answer ');
  } catch (error) {
    console.log('POST /Answer ===', error);

    res.sendStatus(500);
  }
}
async function editAnswers(req, res) {
  const { body_a } = req.body;
  const { id_a } = req.params;
  console.log('q_id', id_a);
  console.log('req.body', req.body);

  try {
    const saveResult = await editAnswersDb(body_a, id_a);
    console.log('resp', saveResult);
    if (saveResult.affectedRows === 1) {
      res.status(201).json('Answer successfully updated');
      return;
    }
    res.status(400).json('Error in updating Answers ');
  } catch (error) {
    console.log('patch /Answers ===', error);

    res.sendStatus(500);
  }
}
async function deleteAnswers(req, res) {
  //   const { body_q } = req.body;
  const { id_a } = req.params;
  console.log('id_a', id_a);
  //   console.log('req.body', req.body);

  try {
    const saveResult = await deleteAnswersDb(id_a);
    console.log('resp', saveResult);
    if (saveResult.affectedRows === 1) {
      res.status(201).json('Answer successfully deleted');
      return;
    }
    res.status(400).json('Error in deleting Answer ');
  } catch (error) {
    console.log('delete /Answer ===', error);

    res.sendStatus(500);
  }
}
async function deleteAnswersByquestionId(req, res) {
  //   const { body_q } = req.body;
  const { id_q } = req.params;
  console.log('id_q', id_q);
  //   console.log('req.body', req.body);

  try {
    const saveResult = await deleteAnswersByquestionIdDb(id_q);
    console.log('resp', saveResult);
    if (saveResult.affectedRows === 1) {
      res.status(201).json('Answers successfully deleted');
      return;
    }
    res.status(400).json('Error in deleteAnswersByquestionIdDb ');
  } catch (error) {
    console.log('delete /deleteAnswersByquestionI ===', error);

    res.sendStatus(500);
  }
}
async function likeAnswer(req, res) {
  const { id_a } = req.body;

  try {
    const saveResult = await likeAnswersDb(id_a);
    console.log('resp', saveResult);
    if (saveResult.affectedRows === 1) {
      res.status(201).json('Answer successfully liked');
      return;
    }
    res.status(400).json('Error in liking Answer ');
  } catch (error) {
    console.log('patch /Answer like ===', error);

    res.sendStatus(500);
  }
}
async function dislikeAnswer(req, res) {
  const { id_a } = req.body;

  try {
    const saveResult = await dislikeAnswersDb(id_a);
    console.log('resp', saveResult);
    if (saveResult.affectedRows === 1) {
      res.status(201).json('Answer successfully disliked');
      return;
    }
    res.status(400).json('Error in disliking Answer ');
  } catch (error) {
    console.log('patch /Answe disliking ===', error);

    res.sendStatus(500);
  }
}
module.exports = {
  deleteAnswersByquestionId,
  getAnswerByAnswerId,
  getAnswersByUserId,
  likeAnswer,
  dislikeAnswer,
  deleteAnswers,
  getAnswers,
  postAnswers,
  editAnswers,
};
