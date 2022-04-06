const router = require("express").Router();
const User = require("../models/User");
const Crypto = require("crypto-js");

router.post("/register", async (req, res) => {
  const newUser = User({
    username: req.body.username,
    email: req.body.email,
    password: Crypto.AES.encrypt(
      req.body.password,
      process.env.PASSPHRASE
    ).toString(),
  });

  try {
    const savedUser = await newUser.save();
    console.log(savedUser);
    // console.log(
    //   Crypto.AES.decrypt(savedUser.password, process.env.PASSPHRASE).toString(
    //     Crypto.enc.Utf8
    //   )
    // );

    res.status(201).json(savedUser);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
