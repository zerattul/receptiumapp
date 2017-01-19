'use strict';
const conn = require('./guest-schema');

class GuestModel {
	getAll(event, cb) {
		conn.find({event : event}, (err, docs) => {
			if(err) throw err;
			cb(docs);
		});
	}

	getOne(_id, cb) {
		conn.findOne({_id : _id}, (err, docs) => {
			if(err) throw err;
			console.log('documentos', docs);
			cb(docs);
		});
	}

	save(data, cb) {
		conn.create(data, (err) => {
			if(err) throw err;
			return cb(null, 'Invitado Guardado');
		});
	}

	update(data, cb) {
		conn.findOneAndUpdate({_id : data._id}, {$set : {name: data.name, date : data.date}}, (err) => {
			if(err) throw err;
			return cb(null, 'Invitado Actualizado');
		});
	}

	delete(event, cb) {
		conn.remove({event : event}, (err) => {
			if(err) throw err;
			cb();
		});
	}
}

module.exports = GuestModel;
