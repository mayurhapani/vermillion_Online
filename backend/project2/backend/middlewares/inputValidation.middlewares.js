const { body } = require("express-validator");

exports.registerInputValidation = [
  body("name").notEmpty().withMessage("name is address requitred"),
  body("email").notEmpty().withMessage("email is address requitred").isEmail().withMessage("Please enter valid email address"),
  body("password")
    .notEmpty()
    .withMessage("password is address requitred")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters"),
];
