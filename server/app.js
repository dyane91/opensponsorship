const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;

const Player = require('./models/player');
const routes = require('./routes/player.route');

app.use(express.static(path.join(__dirname, '../app')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

mongoose.connect(
	'mongodb+srv://dyane_a:testing123@cluster0-rxmlq.gcp.mongodb.net/test?retryWrites=true&w=majority',
	{ useNewUrlParser: true },
	(err) => {
		if (err) {
			console.log(`Error connecting to db: ${err}`);
		} else {
			console.log('Successfully connected');
		}
	}
);

const db = mongoose.connection;
db.on('error', (err) => console.error(`error: ${err}`));
db.on('open', () => {
	console.log('YAY CONNECTED');
})

app.use('/player', routes)
app.listen(port, () => console.log(`Example listening on port ${port}!`));