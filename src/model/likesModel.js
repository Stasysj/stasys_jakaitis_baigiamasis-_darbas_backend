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
// --------------------------------
function getLikesDb(user_id, id_q) {
  const sql = `SELECT * FROM likes WHERE  likes.id_q = ${id_q} `;
  //   const sql = `SELECT * FROM likes WHERE likes.user_id = ${user_id} AND likes.id_q = ${id_q}`;
  return executeDb(sql, []);
}
function patchLikesDb(user_id, id_q) {
  const sql = 'INSERT INTO likes (user_id, id_q, like_q) VALUES (?,?,?)';
  return executeDb(sql, [user_id, id_q, true]);
}
function patchDisLikesDb(user_id, id_q) {
  const sql = 'INSERT INTO likes (user_id, id_q, like_q) VALUES (?,?,?)';
  return executeDb(sql, [user_id, id_q, false]);
}
function patchLikesPoDislikeDb(user_id, id_q) {
  const sql = `UPDATE likes SET  like_q = true WHERE likes.user_id=${user_id} AND likes.id_q = ${id_q}`;
  //   const sql = `UPDATE questions SET title_q = (?), body_q = (?), edited_q = 1 WHERE questions.id_q = ${id_q}`;

  return executeDb(sql, []);
}
function patchDislikeLikeDb(user_id, id_q) {
  const sql = `UPDATE likes SET  like_q = false WHERE likes.user_id=${user_id} AND likes.id_q = ${id_q}`;
  //   const sql = `UPDATE questions SET title_q = (?), body_q = (?), edited_q = 1 WHERE questions.id_q = ${id_q}`;

  return executeDb(sql, []);
}
//----------------------------------
module.exports = {
  getLikesDb,
  patchLikesDb,
  patchLikesPoDislikeDb,
  patchDisLikesDb,
  patchDislikeLikeDb,
};
