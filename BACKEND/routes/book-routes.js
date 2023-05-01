const express = require('express');
const router = express.Router();

const bookController = require('../controllers/book-controllers');


router.post("/add", bookController.createBook);
router.get("/", bookController.getAllBooks);
router.get("/:bookId", bookController.getBookById);
router.put("/:bookId", bookController.updateBook);
router.delete('/:bookId', bookController.deleteBook);

module.exports = router;

