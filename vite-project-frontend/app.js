const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import CORS package
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/bookRoutes');
const app = express();

// Enable CORS for all routes
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/bookcollection', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("Error connecting to MongoDB:", err));

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // For static assets like CSS and JS
app.set('view engine', 'ejs');

// Routes
app.use('/api/books', bookRoutes);

// Start the server
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
