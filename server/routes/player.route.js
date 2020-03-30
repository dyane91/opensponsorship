const express = require('express');
const route = express.Router();

route.get('', (req, res) => {});
route.post('/new-player', (req, res) => {});
route.put('/:id', (req, res) => {});

module.exports = route;