'use strict';

var express = require('express'),
	app = express();


var config = require('./server/config/config');

require('./server/config/express')(app, express, config);

require('./server/config/mongoose')(config);

require('./server/config/routes')(app);


app.listen(config.port, function() {
	console.log('Listening on port ' + config.port);
});