var facebook = require('./passport-facebook.js'),
	twitter = require('./passport-twitter.js');

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

	app.post('/logout', function(req, res) {
		req.logout();
		res.redirect('/');
	});

}