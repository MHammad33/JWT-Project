const express = require("express");
const app = express();

const errorHandlerMiddleware = require("./middleware/error-handler.middleware");
const notFoundMiddleware = require("./middleware/not-found.middleware");
const authRouter = require("./routes/auth.routes");

// Middleware
app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
})

// Routes
app.use("/api/v1", authRouter);


// Error handling middleware
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

module.exports = app;