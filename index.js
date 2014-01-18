var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
    'Access-Control-Allow-Headers': 'X-PINGOTHER',
    'content-type': 'application/json'
  });
  var obj;
  try {
    obj = new Function('return ' + decodeURI(req.url.substr(1)))();
  } catch (e) {
    obj = { msg: 'Sorry, your Input is somehow scary!', error: e };
  }
  
  res.end(JSON.stringify(obj));
}).listen(process.env.PORT || 1337);