const express = require("express");
require("dotenv").config();
const dbConnection = require("./config/db");
const mongoose = require("mongoose");
const userModel = require("./models/User");

const userRouter = require("./Routes/user.routes");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRouter);

dbConnection();
app.listen(port, () => console.log(`server is started on ${port}`));
