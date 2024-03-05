const express = require("express");
require("dotenv").config();
const dbConnection = require("./config/db");
const mongoose = require("mongoose");
const userModel = require("./models/User");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/users/create", async (req, res) => {
  //   console.log(req.body);
  try {
    const newUser = new userModel({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    console.log(newUser);
    await newUser.save();
    res.status(200).json({ message: "User Registerd ", user: newUser });

    //   res.send("its working post");
  } catch (error) {}
  console.log(error);
  res.status(500).json({ message: "Internal Server Error" });
});

app.get("/users/all", async (req, res) => {
  try {
    const users = await userModel.find();

    res.json({ users });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// app.get("/", (req, res) => {
//   res.send("hello");
// });

dbConnection();
app.listen(port, () => console.log(`server is started on ${port}`));
