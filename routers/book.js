const express = require("express");
const bookController = require("../controllers/book");
const router = express.Router();

router.route("/").get(bookController.getAllBooks).post(bookController.addBook);
router.route("/isbn").post(bookController.getBookByIsbn);
router
  .route("/:id")
  .get(bookController.getOneBook)
  .patch(bookController.updateOneBook)
  .delete(bookController.deleteOneBook);
// router.route("/read").post(bookController.changeStatus);
// router.route("/add/:isbn").get(bookController.getBookFrom);
module.exports = router;
