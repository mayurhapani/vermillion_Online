const express = require("express");
const dbConnection = require("./config/db");

require("dotenv").config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;
dbConnection();

app.listen(port, () => console.log(`server is connected on ${port}`));
