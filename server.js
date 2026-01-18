require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const Book = require('./models/Book');
const app = express();

app.use(express.json()); // Валидация JSON [cite: 16]
app.use(express.static('public')); // Для фронтенда [cite: 25]

// Подключение к MongoDB 
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB Atlas'))
  .catch(err => console.error('❌ Connection error:', err));

// 1. POST: Создать книгу [cite: 19]
app.post('/books', async (req, res) => {
  try {
    const book = new Book(req.body);
    await book.save();
    res.status(201).json(book); // 201 Created [cite: 22]
  } catch (err) {
    res.status(400).json({ error: "Bad Request: Check required fields" }); // 400 [cite: 22]
  }
});

// 2. GET: Получить все книги [cite: 19]
app.get('/books', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// 3. GET: Получить одну книгу по ID [cite: 19]
app.get('/books/:id', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ error: "Not Found" }); // 404 [cite: 22]
    res.json(book);
  } catch (err) {
    res.status(400).json({ error: "Invalid ID format" });
  }
});

// 4. PUT: Обновить книгу [cite: 20]
app.put('/books/:id', async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedBook);
  } catch (err) {
    res.status(400).json({ error: "Update failed" });
  }
});

// 5. DELETE: Удалить книгу [cite: 20]
app.delete('/books/:id', async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: "Delete failed" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));