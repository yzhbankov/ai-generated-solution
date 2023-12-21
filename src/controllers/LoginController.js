// src/controllers/LoginController.js
const express = require('express');
const Login = require('../usecases/Login');

const router = express.Router();

router.post('/', async (req, res) => {
    const token = await Login.execute(req.body);
    res.json({ token });
});

module.exports = router;
