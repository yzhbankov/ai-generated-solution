// src/controllers/UsersController.js
const express = require('express');
const SaveUser = require('../usecases/SaveUser');
const GetUsers = require('../usecases/GetUsers');
const DeleteUser = require('../usecases/DeleteUser');

const router = express.Router();

router.post('/', async (req, res) => {
    const user = await SaveUser.execute(req.body);
    res.json(user);
});

router.get('/', async (req, res) => {
    const users = await GetUsers.execute();
    res.json(users);
});

router.delete('/:id', async (req, res) => {
    await DeleteUser.execute(req.params.id);
    res.json({ message: 'User deleted successfully' });
});

module.exports = router;
