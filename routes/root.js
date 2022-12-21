const express = require('express');
const router = express.Router();
const path = require('path');

router.get('^/$|/index(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
}); // Permet de cibler un fichier static index.html, avec les endpoint "/", "/index" et "/index.html"

module.exports = router;