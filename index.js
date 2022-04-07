const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Mongoose connection successfull.");
  })
  .catch((err) => {
    console.log(err);
  });
app.use(express.json());
app.use("/user", userRoute);
app.use("/auth", authRoute);
app.use("/product", productRoute);

app.listen(5000 || process.env.PORT, () => {
  console.log("Express server running on port 5000.");
});
