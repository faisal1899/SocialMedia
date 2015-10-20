var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	_id: String,
	accountType: String,
	firstName: String,
	lastName: String,
	email: String,
	gender: String
}, {_id: false})

mongoose.model('User', userSchema);