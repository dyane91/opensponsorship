const Player = require('../models/player');

module.exports = {
	createNewPlayer: (req, res) => {
		const params = req.body.player;
		const newPlayer = Player({...params});
		newPlayer.save((err) => {
			if (err) return console.error(`Error saving: ${err}`);
			console.log('Successfully created');
			res.send({successfully: true});
		});
	},

	getPlayers: async (req, res) => {
		const filter = {};
		const players =  await Player.find(filter);
		res.send({players});
	},
}