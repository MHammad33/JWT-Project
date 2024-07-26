const jwt = require("jsonwebtoken");
const CustomApiError = require("../errors/custom-error");

const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    // 400 is a bad request
    throw new CustomApiError("Username and Password Required", 400);
  }

  // Token Creation
  const id = new Date().getDate();
  const userForToken = { username, id };
  const token = jwt.sign(userForToken, process.env.JWT_SECRET_KEY, { expiresIn: "1h" });

  res.json({ msg: "User created", token });
}

const dashboard = async (req, res) => {
  const user = req.user;
  if (!user) {
    throw new CustomApiError("User does not exist.", 401);
  }

  const randomNum = Math.floor(Math.random() * 100);

  res.status(200).json({
    msg: `Hello, you are authenticated, ${user.username}`,
    secret: `Here is your authorized data, your lucky number is ${randomNum}`
  });
}

module.exports = {
  login, dashboard
};