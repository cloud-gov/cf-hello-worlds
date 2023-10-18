const http = require('http');
const os = require('os');
const bunyan = require('bunyan');

const port = process.env.PORT || 5000;
const logger = bunyan.createLogger({name: "myapp"});

http.createServer( (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  logger.info({baltimore: "orioles"});
  res.end(`Hello World from NodeJS on port ${port} from container ${os.hostname()}`);
}).listen(port, () => {
  logger.info({"message":"Listening on " + port});
});
