const express = require('express');
const { getUsers } = require('../controller/userController');
// -------------------------------------------

const userRoutes = express.Router();

// ------------------------------------------
userRoutes.get('/users', getUsers);

// -------------------------------------------
module.exports = userRoutes;
