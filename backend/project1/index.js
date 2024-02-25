const express = require("express");
const dotenv = require("dotenv").config();
const app = express();

port = process.env.PORT || 3000;

//get
app.get("/api/contect", (req, res) => {
  res.status(200).json({ massage: "this is contect data" });
});

//post
app.post("/api/login", (req, res) => {
  res.status(200).json({ massage: "this is login data" });
});

//put
app.put("/api/update/:id", (req, res) => {
  const id = req.params.id;
  res.status(200).json({ massage: `your user name is changed for ${id}` });
});

//delete
app.delete("/api/user/:id", (req, res) => {
  const id = req.params.id;
  res.status(200).json({ massage: `your uder id for ${id} is deleted` });
});

app.listen(port, () => {
  console.log(`port is ${port}`);
});
