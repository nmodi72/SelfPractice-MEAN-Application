var express = require('express'),
	morgan = require('morgan'),
	async = require('async');

var _port = 8083;

var app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + "/../static"));

console.error("Starting Server on port... " + _port);
app.listen(_port);			