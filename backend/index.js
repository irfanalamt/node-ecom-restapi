const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");

const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const homeRoute = require("./routes/home");

dbUrl = process.env.DB_URL || "mongodb://localhost:27017/ecom";
mongoose
  .connect(dbUrl)
  .then(() => {
    console.log("Mongoose connection successfull.");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(express.json());
app.use("/", homeRoute);
app.use("/user", userRoute);
app.use("/auth", authRoute);
app.use("/product", productRoute);
app.use("/cart", cartRoute);
app.use("/order", orderRoute);

app.listen(5000 || process.env.PORT, () => {
  console.log("Express server running on port 5000.");
});
