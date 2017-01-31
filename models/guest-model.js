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

	update(_id, data, cb) {
		console.log('data update', data);
		conn.findOneAndUpdate({_id : _id, event : data.event}, {$set : data}, (err) => {
			if(err) throw err;
			return cb(null, 'Invitado Actualizado');
		});
	}

	remove(_id, cb) {
		conn.remove({_id : _id}, (err) => {
			if(err) throw err;
			cb();
		});
	}

	confirmar(_id, event, cb){
		conn.findOneAndUpdate({_id : _id, event : event}, {$set : {confirm : 1}}, (err) => {
			if(err) throw err;
			return cb(null, 'Invitado Confirmado');
		});
	}

	evento(event, cb) {
		conn.find({event : event}, (err, docs) => {
			if(err) throw err;
			cb(docs);
		});
	}

	contar(event, cb){
	 conn.count({confirm: 1}, function(err, c) {
      console.log('Numeor de elmentos :' + c);
    });
	}
}

module.exports = GuestModel;
