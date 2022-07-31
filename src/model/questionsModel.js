const mysql = require('mysql2/promise');
const { dbConfig } = require('../config');
// --------------------------
async function executeDb(sql, dataToDbArr) {
  let conn;
  try {
    conn = await mysql.createConnection(dbConfig);
    const [result] = await conn.execute(sql, dataToDbArr);
    console.log('resultatas ish executeDb', result);
    return result;
  } catch (error) {
    console.log('error executeDb', error);
    throw error;
  } finally {
    conn?.end();
  }
}

function getQuestionsDb() {
  const sql = 'SELECT * FROM questions WHERE questions.archived_q = 0';
  return executeDb(sql, []);
}
function getQuestionsByIdDb(id_q) {
  const sql = `SELECT * FROM questions WHERE questions.archived_q = 0 AND id_q = ${id_q}`;
  return executeDb(sql, []);
}
function getQuestionsByUserIdDb(user_id) {
  const sql = `SELECT * FROM questions WHERE questions.archived_q = 0 AND user_id = ${user_id}`;
  return executeDb(sql, []);
}

function postQuestionDb(title_q, body_q, user_id, add_time_q, add_time_mili_q) {
  const sql =
    'INSERT INTO questions (title_q, body_q, user_id, add_time_q, add_time_mili_q) VALUES (?,?,?,?,?)';
  return executeDb(sql, [title_q, body_q, user_id, add_time_q, add_time_mili_q]);
}

function editQuestionDb(title_q, body_q, id_q) {
  //   const sql = `UPDATE questions SET body_q = (?) WHERE questions.id_q = ${id_q}`;
  const sql = `UPDATE questions SET title_q = (?), body_q = (?), edited_q = 1 WHERE questions.id_q = ${id_q}`;
  return executeDb(sql, [title_q, body_q]);
}
function deleteQuestionDb(id_q) {
  //   const sql = `UPDATE questions SET archived_q = 1 WHERE questions.id_q = ${id_q}`;
  const sql = `DELETE FROM questions  WHERE questions.id_q = ${id_q}`;
  return executeDb(sql, []);
}
function likeQuestionDb(id_q) {
  const sql = `UPDATE questions SET like_q = like_q + 1  WHERE questions.id_q = ${id_q}`;
  return executeDb(sql, []);
}
function addQuestionAnswersCountDb(id_q) {
  const sql = `UPDATE questions SET number_a = number_a + 1  WHERE questions.id_q = ${id_q}`;
  return executeDb(sql, []);
}
function dislikeQuestionDb(id_q) {
  const sql = `UPDATE questions SET like_q = like_q - 1  WHERE questions.id_q = ${id_q}`;
  return executeDb(sql, []);
}
// function counterDislikeQuestionDb(id_q, user_id) {
//   const reik = 'z'.concat(user_id);
//   //   const sql = `UPDATE questions SET likes_counter_q = likes_counter_q + ',${id_q}' WHERE questions.id_q = ${id_q}`;
//   const sql = `UPDATE questions SET  likes_counter_q = CONCAT('${reik}',likes_counter_q ) WHERE questions.id_q = ${id_q}`;
//   return executeDb(sql, []);
// }
module.exports = {
  //   counterDislikeQuestionDb,
  addQuestionAnswersCountDb,
  getQuestionsByUserIdDb,
  getQuestionsByIdDb,
  dislikeQuestionDb,
  likeQuestionDb,
  getQuestionsDb,
  postQuestionDb,
  editQuestionDb,
  deleteQuestionDb,
};
