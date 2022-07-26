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
  const sql = 'SELECT * FROM questions';
  return executeDb(sql, []);
}

function postQuestionDb(title_q, body_q, user_id) {
  const sql = 'INSERT INTO questions (title_q, body_q, user_id) VALUES (?,?,?)';
  return executeDb(sql, [title_q, body_q, user_id]);
}

function editQuestionDb(body_q, id_q) {
  const sql = `UPDATE questions SET body_q = (?) WHERE questions.id_q = ${id_q}`;
  return executeDb(sql, [body_q]);
}

module.exports = {
  getQuestionsDb,
  postQuestionDb,
  editQuestionDb,
};
