const express = require('express');
const fs = require('fs');
const path = require('path');
const routeFolder = require('./routes');

const app = express();
const PORT = 9352;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use('/api', routeFolder)

// GET route for the homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

// GET route for notes page
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
});

app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
);

// Acceptance criteria

// When I click an existing note in the list in the left-hand column, 
// that note appears in the right-hand column
