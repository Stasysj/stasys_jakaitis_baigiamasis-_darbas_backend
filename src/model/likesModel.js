const mysql = require('mysql2/promise');
const { dbConfig } = require('../config');
// --------------------------
async function executeDb(sql, dataToDbArr) {
  let conn;
  try {
    conn = await mysql.createConnection(dbConfig);
    const [result] = await conn.execute(sql, dataToDbArr);
    return result;
  } catch (error) {
    console.log('error executeDb', error);
    throw error;
  } finally {
    conn?.end();
  }
}
// --------------------------------------------------------------------GUESTIONS
// ---------------------------------------------------------------------------------
function getLikesDb(user_id, id_q) {
  const sql = `SELECT * FROM likes WHERE  likes.id_q = ${id_q} `;
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

  return executeDb(sql, []);
}
function patchDislikeLikeDb(user_id, id_q) {
  const sql = `UPDATE likes SET  like_q = false WHERE likes.user_id=${user_id} AND likes.id_q = ${id_q}`;

  return executeDb(sql, []);
}
// ------------------------------------------------------------------------------------ANSWERS LIKES
// ------------------------------------------------------------------------------------------
function getLikesDbA(id_a) {
  const sql = `SELECT * FROM likes2 WHERE  likes2.id_a = ${id_a} `;
  return executeDb(sql, []);
}
function patchLikesDbA(user_id, id_a) {
  const sql = 'INSERT INTO likes2 (user_id, id_a, like_a) VALUES (?,?,?)';
  return executeDb(sql, [user_id, id_a, true]);
}
function patchDisLikesDbA(user_id, id_a) {
  const sql = 'INSERT INTO likes2 (user_id, id_a, like_a) VALUES (?,?,?)';
  return executeDb(sql, [user_id, id_a, false]);
}
function patchLikesPoDislikeDbA(user_id, id_a) {
  const sql = `UPDATE likes2 SET  like_a = true WHERE likes2.user_id=${user_id} AND likes2.id_a = ${id_a}`;

  return executeDb(sql, []);
}
function patchDislikeLikeDbA(user_id, id_a) {
  const sql = `UPDATE likes2 SET  like_a = false WHERE likes2.user_id=${user_id} AND likes2.id_a = ${id_a}`;

  return executeDb(sql, []);
}
// --------------------------------------------------------------------------Answer
//----------------------------------
module.exports = {
  getLikesDb,
  patchLikesDb,
  patchLikesPoDislikeDb,
  patchDisLikesDb,
  patchDislikeLikeDb,
  getLikesDbA,
  patchLikesDbA,
  patchLikesPoDislikeDbA,
  patchDisLikesDbA,
  patchDislikeLikeDbA,
};
