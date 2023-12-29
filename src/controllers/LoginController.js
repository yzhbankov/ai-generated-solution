// controllers/LoginController.js
const express = require("express");
const router = express.Router();
const LoginUseCase = require("../usecases/LoginUseCase");

// POST /api/login
router.post("/", LoginUseCase);

module.exports = router;
