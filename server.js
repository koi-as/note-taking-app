const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 9352;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

// When I clikc on the link to the notes page, 
// I am presented with a page with existing notes listed in the left-hand column, 
// plus empty fields to enter a new note title and the note's text in the right-hand column

// When I enter a new not title and the note's text, 
// a save icon appears in the nacigation at the top of the page

// When I click on the save icon, 
// the new not I have entered is saved anmd appears in the left-hand column with the other existing notes

// When I click an existing not in the list in the left-hand column, 
// that note appears in the right-hand column

// When I click on the write icon in the navigation at the top of the page, 
// I am presented with empty fields to enter a new note title and the note's text in the right-hand column
