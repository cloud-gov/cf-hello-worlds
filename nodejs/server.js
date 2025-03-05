const express = require('express');
const port = process.env.PORT || 8080;
const os = require('os');
const lifecycle = process.env.LIFECYCLE || 'not_set'

const app = express();

app.use((request, _, next) => {
  const requestTime = new Date(Date.now()).toString();
  console.log(request.method, request.hostname, request.path, requestTime);
  next();
});

app.get('/', (request, response) => {
  response.send(`<!DOCTYPE html>
<html>
  <head>
    <title>Powered By ${lifecycle} Buildpacks</title>
  </head>
  <body>
    <p>Hello World from NodeJS on port ${port} from container ${os.hostname()} with ${lifecycle} buildpacks</p>
  </body>
</html>`);
});

app.get("/actuator/health", (request, response) => {
  response.json({ status: "UP" });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
