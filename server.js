const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 9352;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
);
