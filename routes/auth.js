const router = require("express").Router();
const User = require("../models/User");
const Crypto = require("crypto-js");
const jwt = require("jsonwebtoken");

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
    console.log(
      Crypto.AES.decrypt(savedUser.password, process.env.PASSPHRASE).toString(
        Crypto.enc.Utf8
      )
    );

    res.status(201).json(savedUser);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return res.status(500).json("Invalid credentials");
    }
    const pass = Crypto.AES.decrypt(
      user.password,
      process.env.PASSPHRASE
    ).toString(Crypto.enc.Utf8);
    if (pass !== req.body.password) {
      return res.status(500).json("Invalid password");
    }
    const accessToken = jwt.sign(
      { id: user._id, isDev: user.isDev },
      process.env.SECRET,
      { expiresIn: "2d" }
    );
    const { password, ...others } = user._doc;
    res.status(200).json({ ...others, accessToken });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;