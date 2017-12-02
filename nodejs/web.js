var http = require('http');
var os = require('os');
var port = process.env.PORT || 5000;

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World from NodeJS on port ' + port + ' from container ' + os.hostname() + '\n');
}).listen(port, function() {
  console.log("Listening on " + port);
});
