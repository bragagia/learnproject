var restful = require('node-restful');
var mongoose = restful.mongoose;

var userSchema = new mongoose.Schema({
	login: {
		type: String,
		unique: true,
		require: true
	},
	password: {
		type: String,
		required: true
	}
});

module.exports = restful.model('Users', userSchema);
