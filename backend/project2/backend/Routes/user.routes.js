const express = require("express");
// const userModel = require("../models/User");
const { registerUser, getAllUser, loginUser } = require("../controllers/user.controller");
const { body } = require("express-validator");
const { registerInputValidation } = require("../middlewares/inputValidation.middlewares");
const router = express.Router();

router.post("/register", registerInputValidation, registerUser);
router.post("/login", loginUser);

router.get("/all", getAllUser);

module.exports = router;
