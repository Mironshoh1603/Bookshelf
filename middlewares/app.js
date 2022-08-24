const express = require("express");
const bookRouter = require("../routers/book");
const ErrorController = require("../controllers/errorController");
const AppError = require("../utility/appError");
const app = express();

app.use(express.json());

app.use("/api/v1/book/", bookRouter);
app.all("*", function (req, res, next) {
  next(new AppError(`this url has not found: ${req.originalUrl}`, 404));
});
app.use(ErrorController);

module.exports = app;
