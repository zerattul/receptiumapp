'use strict';
const conn = require('./event-schema');

class EventModel {
	getAll(cb) {
		conn.find({}, (err, docs) => {
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
		conn.count({name : data.name}, (err, count) => {
			if(err) throw err;
			console.log(`Número de Eventos: ${count}`);

			if(count == 0) {
				conn.create(data, (err) => {
					if(err) throw err;
					return cb(null, 'Evento Guardado');
				});
			} else {
				return cb('Ya existe un evento con ese nombre');
			}
		});
	}

	update(data, cb) {
		conn.count({name : data.name}, (err, count) => {
			if(err) throw err;
			console.log(`Número de Eventos: ${count}`);

			if(count == 0) {
				conn.findOneAndUpdate({_id : data._id}, {$set : {name: data.name, date : data.date}}, (err) => {
					if(err) throw err;
					return cb(null, 'Evento Actualizado');
				});
			} else {
				return cb('Ya existe un evento con ese nombre');
			}
		});
	}

	delete(_id, cb) {
		conn.remove({_id : _id}, (err) => {
			if(err) throw err;
			cb();
		});
	}
}

module.exports = EventModel;
