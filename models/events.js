
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EventSchema = new Schema({
  d_log: {
    type: Date,
    required: true
  },
  d_work_d: {
    type: String,
    required: false
  },
  user_id: {
    type: String,
    required: true
  },
  speed: {
    type: Number,
    required: true
  },
  latitude: {
    type: Number,
    required: false
  },
  longetude: {
    type: Number,
    required: false
  },
  x: {
    type: Number,
    required: true
  },
  y: {
    type: Number,
    required: true
  },
  z: {
    type: Number,
    required: true
  },
  EventID: {
    type: String,
    required: true
  },
  EventName: {
    type: String,
    required: true
  },
  EventFaultScore: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Events', EventSchema);
