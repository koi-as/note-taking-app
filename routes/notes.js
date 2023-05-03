const notes = require('express').Router()

notes.get('/', (req, res) => {
    console.info(`${req.method} request received for notes`)
});

notes.post('/', (req, res) => {
    console.info(`${req.method} request received to create a note`)
});

module.exports = notes;
