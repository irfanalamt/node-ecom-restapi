const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.listen(5000, () => {
  console.log("Express server running on port 5000.");
});
