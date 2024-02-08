const notes = require('express').Router();
const { v4: uuid } = require('uuid');
const fs = require('fs'); 

notes.get('/', (req, res) => {
    console.info(`${req.method} request received. GETTING notes...`);

    fs.readFile('./db/db.json', 'utf8', (err, data) => 
        err ? console.log(err) : res.json(JSON.parse(data)));
});

notes.post('/', (req, res) => {
    console.log(`${req.method} request received. POSTING note...`);
    const { title, text } = req.body 
    if(req.body) {
        const newNote = {
            title,
            text, 
            id: uuid()
        };

        const dbNotes = JSON.parse(fs.readFileSync('./db/db.json', 'utf-8'));
        dbNotes.push(newNote);
        fs.writeFileSync('./db/db.json', JSON.stringify(dbNotes));
        res.json('New note created!')
    } else {
        res.error('Sorry. Could not create new note.')
    }
})

module.exports = notes;