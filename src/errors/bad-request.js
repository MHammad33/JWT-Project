const CustomApiError = require("./custom-error");

class BadRequest extends CustomApiError {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = 400;
  }
}

module.exports = BadRequest;