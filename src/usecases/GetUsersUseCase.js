// usecases/GetUsersUseCase.js
const UserModel = require("../models/UserModel");

async function GetUsersUseCase(req, res) {
    try {
        const users = await UserModel.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}

module.exports = GetUsersUseCase;
