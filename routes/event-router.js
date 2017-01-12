'use strict';

const EventController = require('../controllers/event-controller'),
	GuestController = require('../controllers/guests-controller'),
	express = require('express'),
	router = express.Router(),
	ec = new EventController(),
	gm = new GuestController();

router
	.get('/events',ec.getAll)
	.post('/events', ec.save)
	.get('/editar/:_id', ec.getOne)
	.put('/actualizar/:_id', ec.update)
	.delete('/events/:_id', ec.delete)

	.get('/events/:event/guests', gm.getAll)
	.post('/events/:event/guests', gm.save)
	.get('/events/:event/guests/:guest', gm.getAll)



module.exports = router;
