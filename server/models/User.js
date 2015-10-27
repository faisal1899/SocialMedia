var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	_id: String,
	accountType: String,
	firstName: String,
	lastName: String,
	email: String,
	gender: String,
	lastName: String,
	followersCount: String,
	friendsCount: String,
	screenName: String
}, {_id: false})

mongoose.model('User', userSchema);