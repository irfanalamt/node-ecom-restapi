const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;

  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.SECRET, (err, decoded) => {
      if (err) res.status(403).json("Invalid webtoken!");
      req.user = decoded;
      console.log(decoded);
      next();
    });
  } else {
    return res.status(401).json("No token found in header");
  }
};

module.exports = { verifyToken };
