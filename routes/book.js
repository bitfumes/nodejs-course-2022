const express = require("express");
const bookRouter = express.Router();

bookRouter
  .route("/")
  .get((req, res) => {
    res.send("All books");
  })
  .post((req, res) => {
    res.json({ data: "Book is stored" });
  });

bookRouter.get("/:id", (req, res) => {
  res.send(`single book of ID: ${req.params.id}`);
});

module.exports = bookRouter;
