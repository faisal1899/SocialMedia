var express = require('express'),
	app = express();


app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));


app.get('/', function(req, res) {
	res.render('index');
});


app.listen(3030, function() {
	console.log('Listening on port ' + 3030);
});