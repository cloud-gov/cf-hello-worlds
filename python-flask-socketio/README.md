# Python Flask + Socket IO example

This example application shows how to integrate Python Flask with [Socket IO](https://socket.io/) to handle websocket traffic in your Python Flask application.

## Deploying

Deploy the example application:

  ```shell
  cf push
  ```

Assuming you are in the correct cf org and space, the above command is all you
need.  See also: [Cloud.gov Quickstart](https://cloud.gov/docs/getting-started/your-first-deploy/).

## Testing the websocket connection

> You must have `node`/`npm` installed on your machine to use the `client.js` script for testing the websocket connection

1. Install the Node.js dependencies for the `client.js` script:

    ```shell
    npm install
    ```

1. Update this line in `client.js` with the URL of your application:

    ```javascript
    const socket = io("wss://<your-app>.app.cloud.gov");
    ```

1. Run the `client.js` file:

    ```shell
    node client.js
    ```

If you see output like:

  ```shell
  received message: Hello from the server!
  Sent message: Hi there!
  ```

Then everything is working correctly. If the `client.js` script seems to produce no output, then:

- Double-check that you updated the URL in `client.js` correctly
- Inspect the logs from the example application for errors:

    ```shell
    cf logs test-python-flask-socketio --recent
    ```
