const router = require("express").Router();

router.get("/hello", (req, res) => {
  res.send({ message: "api connection success" });
  console.log("/ hit");
});

module.exports = router;
