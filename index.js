const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Mongoose connection successfull.");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(5000, () => {
  console.log("Express server running on port 5000.");
});
