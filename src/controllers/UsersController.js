// controllers/UsersController.js
const express = require("express");
const router = express.Router();
const GetUsersUseCase = require("../usecases/GetUsersUseCase");
const SaveUserUseCase = require("../usecases/SaveUserUseCase");
const DeleteUserUseCase = require("../usecases/DeleteUserUseCase");

// GET /api/users
router.get("/", GetUsersUseCase);

// POST /api/users
router.post("/", SaveUserUseCase);

// DELETE /api/users/:id
router.delete("/:id", DeleteUserUseCase);

module.exports = router;
