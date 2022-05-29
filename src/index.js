const express = require("express");
const app = express();
app.use(express.json());
require("dotenv").config();

const connect = require("./configs/db");
const bookController = require("./controllers/book.controller");
const categoryController = require("./controllers/bookCategory.controller");


// Routes for our books query
app.use("/books", bookController);
app.use("/category", categoryController);


const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  await connect();
  console.log(`Server is runnining on ${PORT}`);
});
