'use strict';

const mongoose = require('./model'),
	Schema = mongoose.Schema,
	GuestSchema = new Schema({
		name  : String,
		table : Number,
		email : String,
		phone : Number,
		event : String,
	},
	{
		collection : 'guest'
	}),
	Guest = mongoose.model('Guest', GuestSchema);

module.exports = Guest;


//TODO 1.- Mandar llamar datos
