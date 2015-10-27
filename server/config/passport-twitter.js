var passport = require('passport');
	TwitterStrategy = require('passport-twitter').Strategy;

var twitterConfig = {
	consumerKey: "gdUcXN9Dl4hykmFPxvdcHdusW",
    consumerSecret: "zHegsnOvs4FvFe1MGgR53faP9qeWBkRYRvYPvUk38s4OE9a7LL",
//    callbackURL: "http://127.0.0.1:3030/auth/twitter/callback",
    callbackURL: "http://192.168.15.78:3030/twitter/callback",
    profileFields: ['id', 'email', 'gender', 'name']
}

var twitterInit = function(token, tokenSecret, profile, done) {
//    console.log('profile = ', profile);

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
            newUser.accountType = 'Twitter';

            newUser.firstName = userData.name.split(' ')[0];
            newUser.lastName = userData.name.split(' ')[1];
            newUser.followersCount = userData.followers_count;
            newUser.friendsCount = userData.friends_count;
            newUser.screenName = userData.screen_name;

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
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(error, user) {
        return done(error, user);
    })
});

passport.use(new TwitterStrategy(twitterConfig, twitterInit));

exports.twitterLogin = passport.authenticate('twitter');
exports.twitterCallback = passport.authenticate('twitter', {
	successRedirect: '/profile',
	failureRedirect: '/'
})