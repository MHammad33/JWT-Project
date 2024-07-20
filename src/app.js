const express = require("express");
const app = express();

const errorHandlerMiddleware = require("./middleware/error-handler.middleware");
const notFoundMiddleware = require("./middleware/not-found.middleware");

// Middleware
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello World!");
})


// Error handling middleware
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

module.exports = app;