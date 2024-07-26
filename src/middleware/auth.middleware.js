const jwt = require("jsonwebtoken");
const CustomApiError = require("../errors/custom-error");

const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new CustomApiError("No token provided", 401);
  }
  const authToken = authHeader.split(" ")[1];

  try {
    const decodedToken = jwt.verify(authToken, process.env.JWT_SECRET_KEY);
    const { id, username } = decodedToken;
    req.user = { id, username };
    next();
  }
  catch (err) {
    throw new CustomApiError("Not authorized to access this route", 401);
  }

}

module.exports = authMiddleware;