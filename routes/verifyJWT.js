const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;

  if (authHeader) {
    //Auth header in the format"bearer jwt"
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.SECRET, (err, decoded) => {
      if (err) return res.status(403).json("Invalid webtoken!");
      req.user = decoded;
      console.log(decoded);
      next();
    });
  } else {
    return res.status(401).json("No token found in header");
  }
};

const verifyTokenAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isDev) {
      console.log(
        `req.user=${JSON.stringify(req.user)} req.params.id=${req.params.id}`
      );
      next();
    } else {
      res.status(401).json("NOT authorized!");
    }
  });
};

const verifyTokenAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isDev) {
      next();
    } else {
      res.status(401).json("NOT authorized!");
    }
  });
};

module.exports = { verifyToken, verifyTokenAuthorization, verifyTokenAdmin };
