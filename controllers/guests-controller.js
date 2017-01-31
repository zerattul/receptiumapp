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
        event : event,
      });
    })
    : errors.http401(req, res, next)
}

getOne(req, res, next) {
  console.log('Editar uno')
  let _id = req.params._id;
  console.log('documentos', _id);

  return (req.session.username)
    ? gm.getOne(_id, (docs) => {
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
  let guest = req.body;
  let id = req.params._id;
  console.log('id', id);
  guest.event = req.params.event;
  console.log('guest', guest);
  console.log(req.params);
  return (req.session.username)
    ? gm.update(id, guest, () => res.redirect('/events/' + guest.event + '/guests') )
    : errors.http401(req, res, next);
}

  remove(req, res, next) {
    console.log("guest borrado :::::::::::::::::::s");
    let event = req.params.event,
        guest = req.params._id;

    console.log(guest);
    console.log(req.params);

    return (req.session.username)
      ? gm.remove( guest, () => res.redirect('/events/' + event + '/guests') )
      : errors.http401(req, res, next);
  }

  confirmar(req, res, next){
    let guest = req.params._id,
        event = req.params.event;

    return (req.session.username)
      ? gm.confirmar(guest, event, () => res.redirect('/events/' + event + '/guests') )
      : errors.http401(req, res, next);
  }

  evento(req, res, next){
    let event = req.params.event;
    return (req.session.username)
      ? gm.evento(event, (docs) => {
        res.render('event', {
          user :req.session.username,
          data : docs,
          event : event,
        });
      })
      : errors.http401(req, res, next)
  }



}

module.exports = GuestController;
