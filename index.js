const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017")
  .then(() => {
    console.log("Mongoose connection successfull.");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(5000, () => {
  console.log("Express server running on port 5000.");
});
