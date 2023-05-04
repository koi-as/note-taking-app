const notes = require('express').Router();
const fs = require('fs');
const uuid = require('../helpers/uuid.js')

notes.get('/', (req, res) => {
    console.info(`${req.method} request received for notes`);

    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            console.log(data);
            res.json(JSON.parse(data));
        };
    });
});

notes.post('/', (req, res) => {
    console.info(`${req.method} request received to create a note`);

    const { title, text } = req.body;

    if (title && text) {
        const newNote = {
            title,
            text,
            id: uuid()
        };

        fs.readFile('./db/db.json',  'utf8', (err, data) => {
            if (err) {
                console.log(err);
            } else {
                const dataFromFile = JSON.parse(data);
                dataFromFile.push(newNote);
                const strigifyData = JSON.stringify(dataFromFile, null, 4);
                fs.writeFile('./db/db.json', strigifyData, (err) => {
                    err
                        ? console.error(err)
                        : console.log(`Note ${newNote.title} has been written to JSON file`)
                });
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
