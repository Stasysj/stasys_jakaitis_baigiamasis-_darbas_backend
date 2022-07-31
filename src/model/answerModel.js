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

function getAnswersDb(id_q) {
  const sql = `SELECT * FROM answers WHERE answers.archived_a = 0 AND answers.id_q = ${id_q}`;
  return executeDb(sql, []);
}
function getAnswersByUserIdDb(user_id) {
  const sql = `SELECT * FROM answers WHERE answers.archived_a = 0 AND answers.user_id = ${user_id}`;
  return executeDb(sql, []);
}
function getAnswerByAnswerIddDb(id_a) {
  const sql = `SELECT * FROM answers WHERE answers.archived_a = 0 AND answers.id_a = ${id_a}`;
  return executeDb(sql, []);
}

function postAnswersDb(id_q, body_a, user_id, add_time_a, add_time_mili_a) {
  const sql =
    'INSERT INTO answers (id_q, body_a, user_id,add_time_a, add_time_mili_a) VALUES (?,?,?,?,?)';
  return executeDb(sql, [id_q, body_a, user_id, add_time_a, add_time_mili_a]);
}

function editAnswersDb(body_a, id_a) {
  const sql = `UPDATE answers SET body_a = (?), edited_a = true WHERE answers.id_a = ${id_a}`;
  return executeDb(sql, [body_a]);
}
function deleteAnswersDb(id_a) {
  const sql = `DELETE FROM answers  WHERE answers.id_a = ${id_a}`;
  return executeDb(sql, []);
}
function deleteAnswersByquestionIdDb(id_q) {
  const sql = `DELETE FROM answers  WHERE answers.id_q = ${id_q}`;
  return executeDb(sql, []);
}
function likeAnswersDb(id_a) {
  const sql = `UPDATE answers SET like_a = like_a + 1  WHERE answers.id_a = ${id_a}`;
  return executeDb(sql, []);
}
function dislikeAnswersDb(id_a) {
  const sql = `UPDATE answers SET like_a = like_a - 1  WHERE answers.id_a = ${id_a}`;
  return executeDb(sql, []);
}

module.exports = {
  deleteAnswersByquestionIdDb,
  getAnswerByAnswerIddDb,
  getAnswersByUserIdDb,
  likeAnswersDb,
  dislikeAnswersDb,
  getAnswersDb,
  postAnswersDb,
  editAnswersDb,
  deleteAnswersDb,
};
