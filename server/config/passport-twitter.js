var passport = require('passport');
	TwitterStrategy = require('passport-twitter').Strategy;

var twitterConfig = {
	consumerKey: "gdUcXN9Dl4hykmFPxvdcHdusW",
    consumerSecret: "zHegsnOvs4FvFe1MGgR53faP9qeWBkRYRvYPvUk38s4OE9a7LL",
    callbackURL: "http://127.0.0.1:3030/auth/twitter/callback",
    profileFields: ['id', 'email', 'gender', 'name']
}

var twitterInit = function(token, tokenSecret, profile, done) {
    User.findOrCreate({ twitterId: profile.id }, function (err, user) {

      return done(err, user);
    });

}

passport.use(new TwitterStrategy(twitterConfig, twitterInit));

exports.twitterLogin = passport.authenticate('twitter');
exports.twitterCallback = passport.authenticate('twitter', {
	successRedirect: '/profile',
	failureRedirect: '/'
})