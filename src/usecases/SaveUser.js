// src/usecases/SaveUser.js
const UserModel = require('../models/UserModel');

class SaveUser {
    async execute(userData) {
        const user = new UserModel(userData);
        return await user.save();
    }
}

module.exports = new SaveUser();
