const router = require("express").Router();
const { verifyToken } = require("./verifyJWT");

router.get("/", (req, res) => {
  res.send("user endpoint hit");
});

router.put("/:id", verifyToken, (req, res) => {
  if (req.user.id === req.params.id || req.user.isDev) {
    res.status(202).json("You have permission to modify this record");
  } else {
    res.status(401).json("Not authorized to modify!");
  }
  console.log(
    `req.user=${JSON.stringify(req.user)} req.params.id=${req.params.id}`
  );
});

module.exports = router;
