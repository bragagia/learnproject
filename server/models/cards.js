var restful = require('node-restful');
var mongoose = restful.mongoose;

var cardSchema = new mongoose.Schema({
	question: {
		type: String,
		require: true
	},
	answer: {
		type: String,
		required: true
	}
});

module.exports = restful.model('Cards', cardSchema);
