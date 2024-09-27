const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const booksRoutes = require('./Routes/booksRoute');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://guptaansh912:guptaansh912@cluster0.kc57p0u.mongodb.net/BooksApp?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.use('/', booksRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


