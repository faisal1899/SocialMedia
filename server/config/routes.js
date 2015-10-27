var facebook = require('./passport-facebook'),
	twitter = require('./passport-twitter')/*,
	google = require('./passport-google')*/;

module.exports = function(app) {

	function checkUserLogin(req, res, next) {
	    if ( !!req.user ) {
	        return next();
	    }
	    res.redirect('/');
	}

	app.get('/',
	    function(req, res, next) {
	        if ( !!req.user ) {
	            return res.redirect('/profile');
	        }
	        next();
	    },
	    function(req, res) {
	        res.render('index');
	    }
	);

	app.get('/profile', checkUserLogin, function(req, res) {
	    res.render('profile', {user: req.user});
	});

	app.get('/facebook', facebook.facebookLogin);
	app.get('/facebook/callback', facebook.facebookCallback);

	app.get('/twitter', twitter.twitterLogin);
	app.get('/twitter/callback', twitter.twitterCallback);

/*	app.get('/auth/google', google.googleLogin);
	app.get('/auth/google/return', google.googleCallback);*/

	app.post('/logout', function(req, res) {
		req.logout();
		res.redirect('/');
	});

}