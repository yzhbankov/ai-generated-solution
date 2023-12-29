// usecases/SaveUserUseCase.js
const UserModel = require("../models/UserModel");

async function SaveUserUseCase(req, res) {
    const { email, name, password } = req.body;

    try {
        const user = new UserModel({ email, name, password });
        await user.save();
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}

module.exports = SaveUserUseCase;
