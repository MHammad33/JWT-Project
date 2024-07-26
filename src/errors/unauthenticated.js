const CustomApiError = require("./custom-error");

class UnauthenticatedError extends CustomApiError {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = 401;
  }
}

module.exports = UnauthenticatedError;