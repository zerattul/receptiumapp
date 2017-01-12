'use strict';

const TeamController = require('../controllers/team-controller'),
	express = require('express'),
	router = express.Router(),
	tc = new TeamController();

router
	// .get('/teams', tc.getAll)
	// .get('/mostrar', tc.getAlls)
	// .get('/agregar', tc.addForm)
	// .post('/teams', tc.save)
	// .get('/editarsss/:_id', tc.getOne)
	// .put('/actualizarfdafda/:_id', tc.save)
//.delete('/eliminar/:_id', tc.delete);

module.exports = router;
