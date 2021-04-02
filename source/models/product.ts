const {Schema, model} = require('mongoose');
let schema = new Schema({
	title: {
		type: String,
		required: true,
		default: ''
	},
	description: {
		type: String,
		required: true,
		default: ''
	},
	price: {
		type: Number,
		required: false,
		default: 0
	},
	count: {
		type: Number,
		required: false,
		default: 0
	}
});

module.exports = model('Product', schema);