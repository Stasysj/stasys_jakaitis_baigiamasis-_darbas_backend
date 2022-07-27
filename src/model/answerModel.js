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

function postAnswersDb(id_q, body_a, user_id) {
  const sql = 'INSERT INTO answers (id_q, body_a, user_id) VALUES (?,?,?)';
  return executeDb(sql, [id_q, body_a, user_id]);
}

function editAnswersDb(body_q, id_q) {
  const sql = `UPDATE questions SET body_q = (?) WHERE questions.id_q = ${id_q}`;
  return executeDb(sql, [body_q]);
}
// function deleteAnswersDb(id_q) {
//   const sql = `UPDATE questions SET archived_q = 1 WHERE questions.id_q = ${id_q}`;
//   return executeDb(sql, []);
// }
module.exports = {
  getAnswersDb,
  postAnswersDb,
  editAnswersDb,
  //   deleteAnswersDb,
};
