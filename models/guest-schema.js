'use strict';

const mongoose = require('./model'),
	Schema = mongoose.Schema,
	GuestSchema = new Schema({
		name    : String,
		table   : Number,
		inv     : Number,
		email   : String,
		phone   : Number,
		event   : String,
		confirm : {type : Number, default : 0}
	},
	{
		collection : 'guest'
	}),
	Guest = mongoose.model('Guest', GuestSchema);

module.exports = Guest;
