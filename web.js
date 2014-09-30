var express = require("express");
var logfmt = require("logfmt");
var app = express();
var cool = require('cool-ascii-faces');

app.use(logfmt.requestLogger());

app.get('/', function(req, res) {
	res.send(cool());
    });

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
	console.log("Listening on " + port);
    });