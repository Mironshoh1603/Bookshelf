class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = this.statusCode == -404 ? "Fail" : "Error";
    Error.captureStackTrace(this, this.constructor);
    return this;
  }
}
module.exports = AppError;
