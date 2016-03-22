var express = require('express');
var app = express();
var path = require('path');
var ejs = require('ejs');

app.engine('html', ejs.renderFile);
app.set('view engine', 'html');

app.use(express.static(__dirname + '/public'));

//Link to the main page
app.get('/', function(req, res){
  res.render( __dirname + '/public/src/content/index.html')
});

//Throw up a 404 on not found
app.use(function(req, res, next) {
  res.render( __dirname + '/public/src/content/404.html')
});

//Start Listening
var server = app.listen(8080, function(){
	var host = server.address().address;
	var port = server.address().port;

	console.log('Server Started at http://%s:%s', host, port);
});