var passport = require('passport'),
	session = require('express-session');

module.exports = function(app, express, config) {
    app.set('views', config.rootPath + '/server/views');
    app.set('view engine', 'jade');
    app.use(express.static(config.rootPath + '/public'));
    
	app.use(session( {secret: 'flashkit', resave: false, saveUninitialized: true} ));
	app.use(passport.initialize());
	app.use(passport.session());
}