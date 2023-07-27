const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const { readDb, writeDb } = require("../../helpers/helpers.js");

const notesRouter = require('express').Router();

notesRouter.get('/notes', (req, res) => {
  fs.readFile('./db/db.json', function(err, data) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(data);
    return res.end();
});
});

notesRouter.post('/notes', (req, res) => {
  const newNote = req.body;
  const dbData = readDb();
  newNote.id = uuidv4();
  dbData.push(newNote);
  writeDb(dbData);
  res.json(newNote);
});

module.exports = notesRouter;