const router = require("express").Router();
const User = require("../models/User");
const { verifyToken, verifyTokenAuthorization } = require("./verifyJWT");

router.get("/", (req, res) => {
  res.send("user endpoint hit");
});

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

module.exports = router;
