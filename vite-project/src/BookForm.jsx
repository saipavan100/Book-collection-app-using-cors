import React, { useState } from 'react';
import axios from 'axios';

function BookForm() {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [genre, setGenre] = useState('');
    const [message, setMessage] = useState('');

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Prepare data to send
        const bookData = { title, author, genre };

        try {
            const response = await axios.post('http://localhost:3001/api/books', bookData);
            setMessage('Book added successfully!');
            setTitle('');
            setAuthor('');
            setGenre('');
        } catch (error) {
            setMessage('Failed to add book. Please try again.');
        }
    };

    return (
        <div>
            <h2>Add a New Book</h2>
            {message && <p>{message}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Author</label>
                    <input
                        type="text"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Genre</label>
                    <input
                        type="text"
                        value={genre}
                        onChange={(e) => setGenre(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Add Book</button>
            </form>
        </div>
    );
}

export default BookForm;
