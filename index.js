require("dotenv").config();
const express = require("express");
const PORT = 8000 || process.env.PORT;
const app = express();

app.get("/hello", (req, res) => {
  res.send("its working");
});

app.listen(8000, () => {
  console.log(`server is listening on port ${PORT}`);
});
