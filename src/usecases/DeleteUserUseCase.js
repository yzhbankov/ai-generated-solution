// usecases/DeleteUserUseCase.js
const UserModel = require("../models/UserModel");

async function DeleteUserUseCase(req, res) {
    const userId = req.params.id;

    try {
        const user = await UserModel.findByIdAndDelete(userId);
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}

module.exports = DeleteUserUseCase;
