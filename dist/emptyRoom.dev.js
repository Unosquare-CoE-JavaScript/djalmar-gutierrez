"use strict";

var _require = require('./seudoUnderscore'),
    _ = _require._;

var newDevelopment = [{
  name: 'Miss Scarlet',
  present: true,
  rooms: [{
    kitchen: false
  }, {
    ballroom: false
  }, {
    conservatory: true
  }, {
    'dining room': true
  }, {
    'billiard room': false
  }, {
    library: true
  }]
}, {
  name: 'Reverend Green',
  present: true,
  rooms: [{
    kitchen: true
  }, {
    ballroom: false
  }, {
    conservatory: false
  }, {
    'dining room': false
  }, {
    'billiard room': true
  }, {
    library: false
  }]
}, {
  name: 'Colonel Mustard',
  present: true,
  rooms: [{
    kitchen: false
  }, {
    ballroom: false
  }, {
    conservatory: true
  }, {
    'dining room': false
  }, {
    'billiard room': true
  }, {
    library: false
  }]
}, {
  name: 'Professor Plum',
  present: true,
  rooms: [{
    kitchen: true
  }, {
    ballroom: false
  }, {
    conservatory: false
  }, {
    'dining room': true
  }, {
    'billiard room': false
  }, {
    library: false
  }]
}];

var arrayRooms = _.reduce(newDevelopment, function (acumulator, item) {
  _.filer(item.rooms, function (room) {
    var roomName = Object.keys(room)[0];

    if (room[roomName]) {
      acumulator = _.filer(acumulator, function (unusedRoom) {
        return unusedRoom !== roomName;
      });
    }
  });

  return acumulator;
}, ['kitchen', 'ballroom', 'conservatory', 'dining room', 'billiard room', 'library']);

console.log(arrayRooms);