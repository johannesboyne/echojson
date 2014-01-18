var assert = require('assert');
var http = require('http');
var spawn = require('child_process').spawn,
    echojson  = spawn('node', [__dirname + '/index.js']);

http.get('http://localhost:1337/%7Bvalue1:%20%22one%22%7D', function (res) {
  var data = '';
  res.on('data', function (d) {
    data += d.toString();
  });
  res.on('end', function () {
    assert.equal(data, '{"value1":"one"}', 'value1 should be one');
  });
});