const { validationResult } = require("express-validator");
const userModel = require("../models/User");
const bcrypt = require("bcryptjs");

exports.registerUser = async (req, res) => {
  try {
    // console.log(req.body);

    const { name, email, password } = req.body;
    const errors = validationResult(req);

    // console.log("hiii");
    // console.log(errors);
    // console.log(errors.array()[0].msg);

    if (!errors.isEmpty()) {
      return res.status(404).json({ success: false, message: errors.array()[0]?.msg });
    }
    const existingUser = await userModel.findOne({ email });
    // console.log(existingUser);

    if (existingUser) {
      return res.status(404).json({ success: true, message: "user already exists" });
    }

    const salt = bcrypt.genSaltSync(10);
    const hashPass = bcrypt.hashSync(password, salt);

    const newUser = new userModel({
      name,
      email,
      password: hashPass,
    });

    await newUser.save();
    res.status(200).json({ success: true, message: "register successfully" });

    // const newUser = new userModel({
    //   name: req.body.name,
    //   email: req.body.email,
    //   password: req.body.password,
    // });
    // console.log(newUser);
    // await newUser.save();
    // res.status(200).json({ message: "User Registerd ", user: newUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.loginUser = async (req, res) => {
  try {
    // const users = await userModel.find();

    const { email, password } = req.body;

    const user = await userModel.findOne({ email });
    if (!user) {
      res.status(401).json({ success: false, message: "User Not Found" });
    }

    const isMatch = bcrypt.compareSync(password, user.password);
    if (!isMatch) {
      res.status(401).json({ success: false, message: "invalid credential" });
    }

    res.status(200).json({ success: true, message: "Login Successfull", user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.getAllUser = async (req, res) => {
  try {
    const users = await userModel.find();

    res.json({ users });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
