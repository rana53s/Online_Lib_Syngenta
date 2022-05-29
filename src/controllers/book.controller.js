const express = require("express");
const router = express.Router();
const Book = require("../models/book.model");

router.post("", async (req, res) => {
  try {
    const book = await Book.create(req.body);
    return res.status(200).send(book);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.get("", async (req, res) => {
  try {
    let CategoryBooks = {};
    if (req.query.category_id) {
      CategoryBooks = { category_id: req.query.category_id };
    }

    const books = await Book.find(CategoryBooks).lean().exec();
    return res.status(200).send(books);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id).lean().exec();
    return res.status(200).send(book);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    return res.status(200).send(book);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});


router.get("/searchByAuthor/:author", async (req, res) => {
  try {
    let regex = new RegExp(req.params.author, 'i');
    const book = await Book.find({ author: regex}).lean().exec();
    return res.status(200).send(book);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.get("/searchByBook/:title", async (req, res) => {
  try {
    let regex2 = new RegExp(req.params.title, 'i');
    const book = await Book.find({ title: regex2}).lean().exec();
    return res.status(200).send(book);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = router;
