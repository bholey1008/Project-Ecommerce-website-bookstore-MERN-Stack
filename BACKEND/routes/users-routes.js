const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users-controllers');


router.get("/", usersController.getAllUsers);
router.post("/add", usersController.createUser);
router.get("/:userId/cart", usersController.getCart);
router.post("/:userId/cart", usersController.addToCart);
router.post("/:userId/place-order", usersController.placeOrder);
// router.get("/:bookId", bookController.getBookById);
// router.put("/:bookId", bookController.updateBook);
// router.delete('/:bookId', bookController.deleteBook);

module.exports = router;

