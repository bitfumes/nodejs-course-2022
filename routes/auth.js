const express = require("express");
const authRoutes = express.Router();
const AuthController = require("../controllers/AuthController");

authRoutes.post("/signup", AuthController.signup);

module.exports = authRoutes;
