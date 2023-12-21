// src/usecases/GetUsers.js
const UserModel = require('../models/UserModel');

class GetUsers {
    async execute() {
        return await UserModel.find();
    }
}

module.exports = new GetUsers();
