'use strict';

const EventModel = require('../models/event-model'),
  errors = require('../middlewares/errors'),
  ev = new EventModel();

class EventController{
getAll(req, res, next) {
  return (req.session.username)
    ? ev.getAll((docs) => {
      res.render('index', {
        user :req.session.username,
        data : docs
      });
    })
    : errors.http401(req, res, next)
}

getOne(req, res, next) {
  console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
  let _id = req.params._id;
  console.log('documentos', _id);

  return (req.session.username)
    ? ev.getOne(_id, (docs) => {
      console.log('documentos', docs);

      res.render('edit', {
        title : 'Editar Contacto',
        user : req.session.username,
        data : docs
      });
    })
    : errors.http401(req, res, next);
}

save(req, res, next) {
  console.log("save");
  let event = {
    name: req.body.name,
    date: req.body.date
  };

  console.log(event);

  return (req.session.username)
    ? ev.save( event, () => res.redirect('/events') )
    : errors.http401(req, res, next);
}

update(req, res, next) {
  console.log("update");
  console.log(req.body);
  return (req.session.username)
    ? ev.update( req.body, () => res.redirect('/events') )
    : errors.http401(req, res, next);
}

delete(req, res, next) {
  let event = req.params._id;
  console.log(event);

  return (req.session.username)
    ? ev.delete( event, () => res.redirect('/events') )
    : errors.http401(req, res, next);
}
}

module.exports = EventController;
