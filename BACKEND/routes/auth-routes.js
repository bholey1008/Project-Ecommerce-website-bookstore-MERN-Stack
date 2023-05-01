const authController = require('../controllers/auth-controllers');

const express = require('express');
const router = express.Router();

// const adminController = require('../controllers/admin-controllers');


router.post("/signin", authController.signIn);

module.exports = router;

