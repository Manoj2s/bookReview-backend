const express = require('express');
const router = express.Router();
const booksController = require('../Controllers/booksController');

router.get('/allbooks', booksController.getAllBooks);

router.get('/allbooks/:id', booksController.getBookById);

router.post('/allbooks/:id/review', booksController.addReview);

router.get('/allbooks/:id/reviews', booksController.getReviews);

module.exports = router;
