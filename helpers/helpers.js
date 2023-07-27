const fs = require('fs');

function readDb() {
  const data = fs.readFileSync('./db/db.json', 'utf8');
  return JSON.parse(data);
};

function writeDb(data) {
  fs.writeFileSync('./db/db.json', JSON.stringify(data), 'utf8');
};

module.exports = { readDb, writeDb };