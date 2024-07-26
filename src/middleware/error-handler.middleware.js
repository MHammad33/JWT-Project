const CustomApiError = require("../errors/custom-error");
const { StatusCodes } = require("http-status-codes");

const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomApiError) {
    return res.status(err.statusCode).json({ message: err.message });
  }
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    message: "Something went wrong, please try again"
  });
}

module.exports = errorHandlerMiddleware;
