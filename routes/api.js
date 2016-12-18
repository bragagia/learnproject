var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();

var Cards = require('../models/cards');
var Users = require('../models/users');

router.post('/auth', function (req, res) {
	Users.findOne({
		login: req.body.login
	}, function (err, user) {
		if (err)
			throw err;
		if (!user)
		{
			res.json({success: false, message: 'Auth failed, user not found.'});
		}
		else
		{
			if (user.password != req.body.password)
			{
				res.json({ success: false, message: 'Authentication failed. Wrong password.' });
			}
			else
			{
				var token = jwt.sign(user, req.app.get('secretAuth'), {
					expiresIn: 86400
				});

				res.json({
					success: true,
					token: token
				});
			}
		}
	});
});

Cards.methods(['get', 'put', 'post', 'delete']);
Cards.register(router, '/cards');

Users.methods(['get', 'put', 'post', 'delete']);
Users.register(router, '/users');

module.exports = router;
