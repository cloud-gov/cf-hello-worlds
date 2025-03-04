const express = require('express');
const port = process.env.PORT || 8080;

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
    <title>Powered By Paketo Buildpacks</title>
  </head>
  <body>
    <img style="display: block; margin-left: auto; margin-right: auto; width: 50%;" src="https://paketo.io/images/paketo-logo-full-color.png"></img>

    <p>CNB on CloudFounddry</p>
  </body>
</html>`);
});

app.get("/actuator/health", (request, response) => {
  response.json({ status: "UP" });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
