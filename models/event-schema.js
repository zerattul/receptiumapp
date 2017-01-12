'use strict';

const mongoose = require('./model'),
  Schema = mongoose.Schema,
  eventSchema = new Schema({
    name : String,
    date : String
  },
  {
    collection : "event"
  }),

  Evento = mongoose.model("Evento", eventSchema);

  module.exports = Evento;
