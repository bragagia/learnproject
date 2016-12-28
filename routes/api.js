var express = require('express');
var jwt = require('jsonwebtoken');
var uuid = require('node-uuid');

var router = express.Router();
var secretKey = uuid.v4(); // TODO

var Cards = require('../models/cards');
var Users = require('../models/users');

router.post('/auth', function (req, res) {
	Users.findOne({
		login: req.body.login
	}, function (err, user) {
		if (err)
			throw err;
		if (!user) {
			res.json({success: false, message: 'Auth failed, user not found.'});
		}
		if (user.password != req.body.password) {
			res.json({ success: false, message: 'Authentication failed. Wrong password.' });
		}

		var claims = {
			sub: user.login,
			iss: 'learner',
			permissions: 'normal'
		};

		var token = jwt.sign(claims, req.app.get('secretAuth'), {
			expiresIn: 86400
		});

		res.json({
			success: true,
			token: token
		});
	});
});

router.use(function(req, res, next) {
	var token = req.body.token || req.query.token || req.headers['x-access-token'];

	if (!token) {
		return res.status(403).send({
			success: false,
			message: 'No token provided.'
		});
	}

	jwt.verify(token, req.app.get('secretAuth'), function (err, decoded) {
		if (err) {
			return res.json({ success: false, message: 'Failed to authenticate token'});
		}

		req.claims = decoded;
		next();
	});
});

Cards.methods(['get', 'put', 'post', 'delete']);
Cards.register(router, '/cards');

Users.methods(['get', 'put', 'post', 'delete']);
Users.register(router, '/users');

module.exports = router;
