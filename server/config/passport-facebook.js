var passport = require('passport');
	FacebookStrategy = require('passport-facebook').Strategy,
	User = require('mongoose').model('User');

var facebookConfig = {
	clientID: '1080094295374464',
	clientSecret: '7ed1844b4fb303915f28154db6f6d2cb',
//	callbackURL: 'http://localhost:3030/facebook/callback',
	callbackURL: 'http://192.168.15.78:3030/facebook/callback',
    profileFields: ['id', 'email', 'gender', 'name']
//    profileFields: ['id', 'email', 'gender', 'name', 'birthday']
}

var facebookInit = function(token, refreshToken, profile, done) {

	var userData = profile._json;
	User
		.findOne({_id: userData.id})
		.exec(function(error, user) {
			if ( error ) {
				return done(error);
			}
			if ( user ) {
				return done(error, user);
			}
			var newUser = new User();
			newUser._id = userData.id;
			newUser.accountType = 'Facebook';
			newUser.email = userData.email;
			newUser.gender = userData.gender;
			newUser.firstName = userData.first_name;
			newUser.lastName = userData.last_name;

			newUser.save(function(error) {
				if ( error ) {
					throw error;
				}
				return done(error, newUser);
			})
		})
}


passport.serializeUser(function(user, done) {
	done(null, user.id);
	//done(null, user._json);
});

passport.deserializeUser(function(id, done) {
	User.findById(id, function(error, user) {
		return done(error, user);
	})
//	done(false, user);
});

passport.use(new FacebookStrategy(facebookConfig, facebookInit));

exports.facebookLogin = passport.authenticate('facebook');
exports.facebookCallback = passport.authenticate('facebook', {
	successRedirect: '/profile',
	failureRedirect: '/'
})