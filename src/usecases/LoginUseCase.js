// usecases/LoginUseCase.js
const UserModel = require("../models/UserModel");
const jwt = require("jsonwebtoken");
const config = require("../config");

async function LoginUseCase(req, res) {
    const { email, password } = req.body;

    try {
        const user = await UserModel.findOne({ email, password });
        if (!user) {
            return res.status(401).json({ error: "Invalid credentials" });
        }

        const token = jwt.sign({ userId: user._id }, "your-secret-key", { expiresIn: "1h" });
        res.json({ email: user.email, name: user.name, token });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}

module.exports = LoginUseCase;
