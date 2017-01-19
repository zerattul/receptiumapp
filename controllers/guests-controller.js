'use strict';

const GuestModel = require('../models/guest-model'),
  errors = require('../middlewares/errors'),
  gm = new GuestModel();

class GuestController{
getAll(req, res, next) {
  let event = req.params.event;
  return (req.session.username)
    ? gm.getAll(event, (docs) => {
      res.render('guest-home', {
        user :req.session.username,
        data : docs,
        event : event
      });
    })
    : errors.http401(req, res, next)
}

getOne(req, res, next) {
  console.log('Editar uno')
  let _id = req.params._id;
  console.log('documentos', _id);

  return (req.session.username)
    ? ev.getOne(_id, (docs) => {
      console.log('documentos', docs);

      res.render('guest-edit', {
        title : 'Editar Contacto',
        user : req.session.username,
        data : docs
      });
    })
    : errors.http401(req, res, next);
}

save(req, res, next) {
  console.log("save guest");
  let guest = req.body;
  guest.event = req.params.event;

  return (req.session.username)
    ? gm.save( guest, () => res.redirect('/events/' + guest.event + '/guests') )
    : errors.http401(req, res, next);
}

update(req, res, next) {
  console.log("update");
  console.log(req.body);
  let guest = req.body;
  guest.event = req.params.event;

  return (req.session.username)
    ? ev.update( guest, () => res.redirect('/events/' + guest.event + '/guests') )
    : errors.http401(req, res, next);
}

  delete(req, res, next) {
    console.log("guest borrado");
    let guest = req.body;
    guest.event = req.params.event;

    return (req.session.username)
      ? gm.delete( guest, () => res.redirect('/events/' + guest.event + '/guests') )
      : errors.http401(req, res, next);
  }
}

module.exports = GuestController;
