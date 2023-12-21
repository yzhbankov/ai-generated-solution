// src/usecases/DeleteUser.js
const UserModel = require('../models/UserModel');

class DeleteUser {
    async execute(userId) {
        await UserModel.findByIdAndDelete(userId);
    }
}

module.exports = new DeleteUser();
