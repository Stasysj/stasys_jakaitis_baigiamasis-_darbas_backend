const { getQuestionsDb, postQuestionDb, editQuestionDb } = require('../model/questionsModel');

// ------------------------------------------
async function getQuestions(req, res) {
  try {
    const questArr = await getQuestionsDb();
    res.json(questArr);
  } catch (error) {
    console.log('error in getting Question route ===', error);
    res.sendStatus(500);
  }
}

async function postQuestion(req, res) {
  const { title_q, body_q, user_id } = req.body;

  try {
    const saveResult = await postQuestionDb(title_q, body_q, user_id);
    if (saveResult.affectedRows === 1) {
      res.status(201).json('Question successfully added');
      return;
    }
    res.status(400).json('Error in adding new Question ');
  } catch (error) {
    console.log('POST /Question ===', error);

    res.sendStatus(500);
  }
}
async function editQuestion(req, res) {
  const { body_q } = req.body;
  const { id_q } = req.params;
  console.log('q_id', id_q);
  console.log('req.body', req.body);

  try {
    const saveResult = await editQuestionDb(body_q, id_q);
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

module.exports = {
  getQuestions,
  postQuestion,
  editQuestion,
};
