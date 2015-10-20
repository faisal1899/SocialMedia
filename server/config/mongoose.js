var mongoose = require('mongoose');
require('../models/User');

module.exports = function(config) {
	mongoose.connect(config.db);
	var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'Unable to connect to database'));
	db.once('open', function callback() {
		console.log('Successfully connected to the database');
	});
}