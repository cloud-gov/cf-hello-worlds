const http = require('http');
const os = require('os');
const port = process.env.PORT || 5000;

http.createServer( (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(`Hello World from NodeJS on port ${port} from container ${os.hostname()}`);
}).listen(port, () => {
  console.log("Listening on " + port);
});
