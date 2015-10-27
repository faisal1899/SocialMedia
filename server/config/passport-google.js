var passport = require('passport');
	GoogleStrategy = require('passport-google').Strategy,
	User = require('mongoose').model('User');

var googleConfig = {
    returnURL: 'http://localhost:3030/auth/google/return',
    realm: 'http://localhost:3030/'/*,
	clientID: '45396513297-tmvtbhgcidarns565r47qp498pimisrh.apps.googleusercontent.com',
	clientSecret: 'rDR6kHO4ehNW9LCa4BYO6_JC',
    profileFields: ['id', 'email', 'gender', 'name']*/
}

var googleInit = function(identifier, profile, done) {
    console.log('Inside googleInit..');
    
	/*var userData = profile._json;
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
			newUser.accountType = 'Google';
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
		})*/
}


// Passport session setup.
//   To support persistent login sessions, Passport needs to be able to
//   serialize users into and deserialize users out of the session.  Typically,
//   this will be as simple as storing the user ID when serializing, and finding
//   the user by ID when deserializing.  However, since this example does not
//   have a database of user records, the complete Google profile is serialized
//   and deserialized.
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

passport.use(new GoogleStrategy(googleConfig, googleInit));

exports.googleLogin = passport.authenticate('google');
exports.googleCallback = passport.authenticate('google', {
	successRedirect: '/profile',
	failureRedirect: '/'
})