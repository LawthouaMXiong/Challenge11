const homeRouter = require('express').Router();
const path = require('path');

homeRouter.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

homeRouter.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = homeRouter;