const notes = require('express').Router();
const fs = require('fs');

notes.get('/', (req, res) => {
    console.info(`${req.method} request received for notes`);
});

notes.post('/', (req, res) => {
    console.info(`${req.method} request received to create a note`);

    const { title, text } = req.body;

    if (title && text) {
        const newNote = {
            title,
            text,
            note_id: uuid()
        };

        fs.readFile('./db/db.json',  'utf8', (err, data) => {
            if (err) {
                console.log(err);
            } else {
                const dataFromFile = JSON.parse(data);
                dataFromFile.push(newNote);
                const strigifyData = JSON.stringify(dataFromFile, null, 4);
            }
        })

        const response = {
            status: 'success',
            body: newNote
        };

        res.json(response);
    } else {
        res.json('Error in posting note');
    }
});

module.exports = notes;
