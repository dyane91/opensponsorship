const player = require('../controller/player.controller');
const express = require('express');
const router = express.Router();

router.get('', player.getPlayers);
router.post('/new-player', player.createNewPlayer);

module.exports = router;