const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },       // Название книги [cite: 9]
  author: { type: String, required: true },      // Обязательное поле 1 [cite: 10]
  genre: { type: String, required: true },       // Обязательное поле 2 [cite: 10]
  description: String
}, { timestamps: true });                        // createdAt, updatedAt [cite: 11]

module.exports = mongoose.model('Book', bookSchema);