import os
from flask import Flask, current_app, request
from flask_socketio import SocketIO, send

port = os.getenv("PORT", "5000")
app = Flask(__name__)
app.debug = True
socketio = SocketIO(app, logger=True, engineio_logger=True)


@socketio.on("connect")
def on_connect():
    send("Hello from the server!")
    current_app.logger.info(
        f"Socket {request.sid} connected from {request.environ.get('HTTP_ORIGIN')}"
    )
    return True


@socketio.on("disconnect")
def on_disconnect():
    current_app.logger.info(f"Socket {request.sid} disconnected")


@socketio.on("message")
def handle_message(data):
    print("received message: " + data)


@socketio.on_error_default
def default_error_handler(e):
    print(e)
    print(request.event["message"])
    print(request.event["args"])


@socketio.on_error
def default_error_handler(e):
    print("Error: {}".format(e))


@app.route("/")
def hello():
    return "Hello World from Flask!"


if __name__ == "__main__":
    socketio.run(app, host="0.0.0.0", port=int(port), debug=True)
