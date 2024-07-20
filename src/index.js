require("dotenv").config();
require("express-async-errors");
const app = require("./app");

const port = process.env.PORT || 3001;

// Start the server
const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (e) {
    console.error(e.message);
  }
}

start();