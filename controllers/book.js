const Book = require("../models/book");
const AppError = require("../utility/appError");
const catchErrorAsync = require("../utility/catchErrorAsync");

const {
  deleteOne,
  updateOne,
  addOne,
  getOne,
  getAll,
} = require("./handlerController");

const getAllBooks = getAll(Book);
const getOneBook = getOne(Book);
const addBook = addOne(Book);
const updateOneBook = updateOne(Book);
const deleteOneBook = deleteOne(Book);

const getBookByIsbn = catchErrorAsync(async (req, res, next) => {
  console.log("asfsf");

  const data = await Book.find({ isbn: req.body.isbn });
  if (!data) {
    next(new AppError("this isbn is not defined!"));
  }
  res.status(200).json({
    status: "Succes",
    data: data,
  });
});

module.exports = {
  getAllBooks,
  getOneBook,
  addBook,
  updateOneBook,
  deleteOneBook,
  getBookByIsbn,
};
