const express = require("express");
const bookRouter = express.Router();
const BookController = require("../controllers/BookController");
const auth = require("../middleware/auth");

bookRouter
  .use(auth)
  .route("/")
  .get(BookController.index)
  .post(BookController.store);
bookRouter
  .route("/:id")
  .get(BookController.show)
  .patch(BookController.udpate)
  .delete(BookController.delete);

module.exports = bookRouter;
