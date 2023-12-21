// src/usecases/Login.js
const jsonwebtoken = require('jsonwebtoken');
const UserModel = require('../models/UserModel');

class Login {
    async execute(credentials) {
        const user = await UserModel.findOne(credentials);
        if (!user) throw new Error('Invalid credentials');
        return jsonwebtoken.sign({ user }, 'secretkey');
    }
}

module.exports = new Login();
