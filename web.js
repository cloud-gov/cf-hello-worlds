var express = require("express");
var app = express();
app.use(express.logger());

var port = process.env.PORT || 5000;
app.get('/', function(request, response) {
  response.send('Hello World from port '+port+'!');
});

app.listen(port, function() {
  console.log("Listening on " + port);
});
