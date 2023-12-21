// src/routes/routes.js
const express = require('express');
const UsersController = require('../controllers/UsersController');
const LoginController = require('../controllers/LoginController');

const router = express.Router();

router.use('/api/users', UsersController);
router.use('/api/login', LoginController);

module.exports = router;
