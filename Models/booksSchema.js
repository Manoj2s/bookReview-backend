const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  number: Number,
  title: String,
  author: String,
  description: String,
  cover_image: String,
  reviews: [
    {
      rating: { type: Number, required: true, min: 1, max: 5 },
      review: { type: String, required: true } 
    }
  ]
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;

