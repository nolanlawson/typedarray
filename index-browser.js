'use strict';

var TypedArrayShim;

var keys = [
  'ArrayBuffer',
  'DataView',
  'Float32Array',
  'Float64Array',
  'Int8Array',
  'Int16Array',
  'Int32Array',
  'Uint8Array',
  'Uint8ClampedArray',
  'Uint16Array',
  'Uint32Array'
];

for (var i = 0; i < keys.length; i++) {
  var key = keys[i];
  if (!(key in window)) {
    if (!TypedArrayShim) {
      // lazy load
      TypedArrayShim = require('./index');
    }
    window[key] = TypedArrayShim[key];
  }
}

