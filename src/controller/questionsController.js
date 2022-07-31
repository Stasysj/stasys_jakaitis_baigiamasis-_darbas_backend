const {
  getQuestionsDb,
  postQuestionDb,
  editQuestionDb,
  deleteQuestionDb,
  likeQuestionDb,
  dislikeQuestionDb,
  getQuestionsByIdDb,
  //   counterDislikeQuestionDb,
  getQuestionsByUserIdDb,
  addQuestionAnswersCountDb,
} = require('../model/questionsModel');

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
async function getQuestionsById(req, res) {
  try {
    const { id_q } = req.params;
    const questArr = await getQuestionsByIdDb(id_q);
    res.json(questArr);
  } catch (error) {
    console.log('error in getting Question route ===', error);
    res.sendStatus(500);
  }
}
async function getQuestionsByUserId(req, res) {
  try {
    const { user_id } = req.params;
    const questArr = await getQuestionsByUserIdDb(user_id);
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
  const { title_q, body_q } = req.body;
  const { id_q } = req.params;
  console.log('q_id', id_q);
  console.log('body_q', body_q);
  console.log('title_q', title_q);

  try {
    const saveResult = await editQuestionDb(title_q, body_q, id_q);
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
// async function editQuestion(req, res) {
//   const { body_q } = req.body;
//   const { id_q } = req.params;
//   console.log('q_id', id_q);
//   console.log('req.body', req.body);

//   try {
//     const saveResult = await editQuestionDb(body_q, id_q);
//     console.log('resp', saveResult);
//     if (saveResult.affectedRows === 1) {
//       res.status(201).json('Question successfully updated');
//       return;
//     }
//     res.status(400).json('Error in updating Question ');
//   } catch (error) {
//     console.log('patch /Question ===', error);

//     res.sendStatus(500);
//   }
// }
async function deleteQuestion(req, res) {
  //   const { body_q } = req.body;
  const { id_q } = req.params;
  console.log('q_id', id_q);
  //   console.log('req.body', req.body);

  try {
    const saveResult = await deleteQuestionDb(id_q);
    console.log('resp', saveResult);
    if (saveResult.affectedRows === 1) {
      res.status(201).json('Question successfully deleted');
      return;
    }
    res.status(400).json('Error in deleting Question ');
  } catch (error) {
    console.log('patch /Question ===', error);

    res.sendStatus(500);
  }
}
async function likeQuestion(req, res) {
  const { id_q } = req.body;

  try {
    const saveResult = await likeQuestionDb(id_q);
    console.log('resp', saveResult);
    if (saveResult.affectedRows === 1) {
      res.status(201).json('Question successfully liked');
      return;
    }
    res.status(400).json('Error in liking Question ');
  } catch (error) {
    console.log('patch /Question like ===', error);

    res.sendStatus(500);
  }
}
async function addQuestionAnswersCount(req, res) {
  const { id_q } = req.body;
  console.log('iddddisas', id_q);

  try {
    const saveResult = await addQuestionAnswersCountDb(id_q);
    console.log('resp', saveResult);
    if (saveResult.affectedRows === 1) {
      res.status(201).json('Answe to count add');
      return;
    }
    res.status(400).json('Error in laddQuestionAnswersCount ');
  } catch (error) {
    console.log('patch /addQuestionAnswersCount ===', error);

    res.sendStatus(500);
  }
}
async function dislikeQuestion(req, res) {
  const { id_q } = req.body;

  try {
    const saveResult = await dislikeQuestionDb(id_q);
    console.log('resp', saveResult);
    if (saveResult.affectedRows === 1) {
      res.status(201).json('Question successfully disliked');
      return;
    }
    res.status(400).json('Error in disliking Question ');
  } catch (error) {
    console.log('patch /Question disliking ===', error);

    res.sendStatus(500);
  }
}
// async function counterDislikeQuestion(req, res) {
//   const { id_q, user_id } = req.body;

//   try {
//     const saveResult = await counterDislikeQuestionDb(id_q, user_id);
//     console.log('resp', saveResult);
//     if (saveResult.affectedRows === 1) {
//       res.status(201).json('Question successfully disliked');
//       return;
//     }
//     res.status(400).json('Error in disliking Question ');
//   } catch (error) {
//     console.log('patch /Question disliking ===', error);

//     res.sendStatus(500);
//   }
// }
module.exports = {
  //   counterDislikeQuestion,
  //   dislikeQuestionDb,
  addQuestionAnswersCount,
  getQuestionsByUserId,
  getQuestionsById,
  dislikeQuestion,
  likeQuestion,
  deleteQuestion,
  getQuestions,
  postQuestion,
  editQuestion,
};
