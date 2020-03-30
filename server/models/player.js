const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
	name: String,
	dob: String,
	nationality: String,
	location: String,
	association: String,
	team: String,
	gender: String,
	sports: [String],
	about: String,
	interests: String,
	charities: String,
	pets: String,
	alcohol: String,
	married: String,
});

module.exports = new mongoose.model('Player', PlayerSchema);
