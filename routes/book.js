const express = require("express");
const { ObjectId } = require("mongodb");
const bookRouter = express.Router();
const connect = require("./../database/db");

bookRouter
  .route("/")
  .get(async (req, res) => {
    const db = await connect();
    const books = await db.collection("book").find().toArray();
    res.json(books);
  })
  .post(async (req, res) => {
    const db = await connect();

    await db.collection("book").insertOne(req.body);
    res.status(201).json({ data: "Book is stored" });
  });

bookRouter
  .route("/:id")
  .get(async (req, res) => {
    const _id = ObjectId(req.params.id);
    const db = await connect();
    const book = await db.collection("book").find({ _id }).toArray();
    res.json(book);
  })
  .patch(async (req, res) => {
    const _id = ObjectId(req.params.id);
    const db = await connect();
    await db.collection("book").updateOne({ _id }, { $set: req.body });
    res.json({ data: "Book is updated" });
  })
  .delete(async (req, res) => {
    const _id = ObjectId(req.params.id);
    const db = await connect();
    await db.collection("book").deleteOne({ _id });
    res.status(204).json();
  });

module.exports = bookRouter;
