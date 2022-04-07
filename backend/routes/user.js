const router = require("express").Router();
const User = require("../models/User");
const { verifyTokenAuthorization, verifyTokenAdmin } = require("./verifyJWT");

//Test endpoint
router.get("/", (req, res) => {
  res.send("user endpoint hit");
});

//Update a user with id,encrypt password
router.put("/:id", verifyTokenAuthorization, async (req, res) => {
  if (req.body.password) {
    req.body.password = Crypto.AES.encrypt(
      req.body.password,
      process.env.PASSPHRASE
    ).toString();
  }
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

//Delete a user with id
router.delete("/:id", verifyTokenAuthorization, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User deleted!");
  } catch (error) {
    res.status(500).json(error);
  }
});

//Get all user details
router.get("/all", verifyTokenAdmin, async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
});

//Get user details with id
router.get("/find/:id", verifyTokenAdmin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).json({ ...others });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
