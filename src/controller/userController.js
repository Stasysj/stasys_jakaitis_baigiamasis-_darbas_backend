const { getAllUsersDB } = require('../model/userModel');

async function getUsers(req, res) {
  try {
    const usersArr = await getAllUsersDB();
    res.json(usersArr);
  } catch (error) {
    console.log('userRoutes.get error ===', error);
    res.sendStatus(500);
  }
}
// ------------------------------
module.exports = {
  getUsers,
};
