// app.js

// Importing dependencies
const express = require('express');
const path = require('path');

// Initialize Express app
const app = express();

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Route for About Me page
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/about.html'));
});

// Route for Resume page
app.get('/resume', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/resume.html'));
});

// Route for Reviews page
app.get('/reviews', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/reviews.html'));
});

// Start the server on a given port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
