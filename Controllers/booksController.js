const Book = require('../Models/booksSchema');

exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findOne({ number: req.params.id });
    if (book) {
      res.json(book);
    } else {
      res.status(404).json({ error: 'Book not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.addReview = async (req, res) => {
  try {
    const { rating, review } = req.body;

    if (!rating || !review) {
      return res.status(400).json({ error: 'Rating and review are required' });
    }
    if (rating < 1 || rating > 5) {
      return res.status(400).json({ error: 'Rating must be between 1 and 5' });
    }

    const book = await Book.findOne({ number: req.params.id });
    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }

    book.reviews.push({ rating, review });

    await book.save();

    res.status(200).json({ message: 'Review added successfully', book });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getReviews = async (req, res) => {
  try {
    const book = await Book.findOne({ number: req.params.id });
    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }

    res.status(200).json(book.reviews);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
