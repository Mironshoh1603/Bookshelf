const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  isbn: {
    type: String,
    required: [true, "You must enter book inbn!"],
    unique: true,
  },
  title: {
    type: String,
    required: [true, "You must enter book name !"],
  },
  author: [
    {
      type: String,
    },
  ],
  first_publishing_year: {
    type: Number,
    default: new Date().getFullYear(),
  },
  numberOfPages: {
    type: Number,
  },
  status: {
    type: String,
    enum: ["reading", "new", "finished"],
    default: "new",
  },
});

const book = mongoose.model("books", bookSchema);

module.exports = book;
