var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');

mongoose.connect('mongodb://localhost/learner');

var app = express();

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.set('secretAuth', '123456789');

app.use('/api', require('./routes/api'));

app.get('/', function(req, res) {
	res.send('Welcome on LearnProject !');
});

app.listen(3000);
console.log('Listening on port 3000');
