const jwt = require("jsonwebtoken");
const { UnauthenticatedError } = require("../errors");

const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new UnauthenticatedError("No token provided");
  }
  const authToken = authHeader.split(" ")[1];

  try {
    const decodedToken = jwt.verify(authToken, process.env.JWT_SECRET_KEY);
    const { id, username } = decodedToken;
    req.user = { id, username };
    next();
  }
  catch (err) {
    throw new UnauthenticatedError("Not authorized to access this route", 401);
  }

}

module.exports = authMiddleware;