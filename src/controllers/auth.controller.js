const login = async (req, res) => {
  res.send("Login route");
}

const dashboard = async (req, res) => {
  const randomNum = Math.floor(Math.random() * 100);

  res.status(200).json({
    msg: "Hello, you are authenticated",
    secret: `Here is your authorized data, your lucky number is ${randomNum}`
  });
}

module.exports = {
  login, dashboard
};