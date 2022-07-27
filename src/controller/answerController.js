const {
  getAnswersDb,
  postAnswersDb,
  editAnswersDb,
  deleteAnswersDb,
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

async function postAnswers(req, res) {
  const { user_id, body_a } = req.body;
  const { id_q } = req.params;
  console.log('id_q, body_a, user_id', id_q, body_a, user_id);
  try {
    const saveResult = await postAnswersDb(id_q, body_a, user_id);
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
  const { body_q } = req.body;
  const { id_q } = req.params;
  console.log('q_id', id_q);
  console.log('req.body', req.body);

  try {
    const saveResult = await editAnswersDb(body_q, id_q);
    console.log('resp', saveResult);
    if (saveResult.affectedRows === 1) {
      res.status(201).json('Question successfully updated');
      return;
    }
    res.status(400).json('Error in updating Question ');
  } catch (error) {
    console.log('patch /Question ===', error);

    res.sendStatus(500);
  }
}
async function deleteAnswers(req, res) {
  //   const { body_q } = req.body;
  const { id_q } = req.params;
  console.log('q_id', id_q);
  //   console.log('req.body', req.body);

  try {
    const saveResult = await deleteAnswersDb(id_q);
    console.log('resp', saveResult);
    if (saveResult.affectedRows === 1) {
      res.status(201).json('Question successfully deleted');
      return;
    }
    res.status(400).json('Error in deleting Question ');
  } catch (error) {
    console.log('delete /Question ===', error);

    res.sendStatus(500);
  }
}
module.exports = {
  deleteAnswers,
  getAnswers,
  postAnswers,
  editAnswers,
};