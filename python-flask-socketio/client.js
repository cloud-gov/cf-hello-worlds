const { io } = require("socket.io-client");

const socket = io("wss://<your-app>.app.cloud.gov");

socket.on("connect", () => {
  const message = 'Hi there!'
  socket.send(message);
  console.log('Sent message: ' + message)
});

socket.on("message", (msg) => {
  console.log(`received message: ${msg}`)
})
