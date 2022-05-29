const express = require("express");
const router = express.Router();
const Category = require("../models/bookCategory.model");

// Post Route for creatinga category of book on the DataBase
router.post("", async (req, res) => {
  try {
    const category = await Category.create(req.body);
    return res.status(200).send(category);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});


// Get Route for finding all category of books from the DataBase
router.get("", async (req, res) => {
  try {
    const categories = await Category.find().lean().exec();
    return res.status(200).send(categories);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = router;
