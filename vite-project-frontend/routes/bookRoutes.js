const express = require('express');
const Book = require('../models/Book');
const router = express.Router();

// Add a new book
router.post('/', async (req, res) => {
    const { title, author, genre } = req.body;
    try {
        const newBook = new Book({ title, author, genre });
        await newBook.save();
        res.status(201).json(newBook);
    } catch (err) {
        res.status(500).json({ error: 'Failed to add book' });
    }
});

module.exports = router;
