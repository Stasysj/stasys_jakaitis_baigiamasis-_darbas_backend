const { getAllUsersDB, registerUserDB, findUserByEmail } = require('../model/userModel');
const { hashPassword, passWordsMatch, generateJwtToken } = require('../utils/helpers');
// ---------------------------------------------------------
async function getUsers(req, res) {
  try {
    const usersArr = await getAllUsersDB();
    res.json(usersArr);
  } catch (error) {
    console.log('userRoutes.get error ===', error);
    res.sendStatus(500);
  }
}
// ---------------------------------------
async function regUser(req, res) {
  const { full_name, email, password } = req.body;
  const newPassword = hashPassword(password);
  try {
    const saveResult = await registerUserDB(full_name, email, newPassword);
    if (saveResult.affectedRows === 1) {
      res.status(201).json('user created');
      return;
    }
    res.status(400).json('no user created');
  } catch (error) {
    console.log('POST /register ===', error);
    if (error.code === 'ER_DUP_ENTRY') {
      res.status(400).json('user alredy exists');
      return;
    }

    res.sendStatus(500);
  }
}

//--------------------------------
async function loginUser(req, res) {
  const gautasEmail = req.body.email;
  const gautasName = req.body.full_name;
  const gautasSlaptazodis = req.body.password;
  const foundUserArr = await findUserByEmail(gautasName, gautasEmail);
  const foundUser = foundUserArr[0];
  const { user_id, full_name } = foundUser;
  if (!foundUser) {
    res.status(400).json('name, email or password not found ');
    return;
  }
  if (!passWordsMatch(gautasSlaptazodis, foundUser.password)) {
    res.status(400).json('name, email or password not found ');
    return;
  }
  const payload = { userId: foundUser.id };
  const token = generateJwtToken(payload);
  res.json({ success: true, token, user_id, full_name });
}
// ------------------------------
module.exports = {
  getUsers,
  regUser,
  loginUser,
};
