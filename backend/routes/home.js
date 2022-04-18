const router = require("express").Router();

router.get("/hello", (req, res) => {
  res.send({ message: "user endpoint hit" });
  console.log("/ hit");
});

module.exports = router;
