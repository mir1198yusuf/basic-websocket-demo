# Basic Websocket demo

##### Running the websocket server

- Clone this repo
- Run `npm install`
- Start server by `node index.js`

##### To test server

- Open developer tools in any browser & go to console
- Run 
    ```
    ws = new WebSocket('ws://localhost:8080');
    ws.onopen = (event) => console.log(event);
    ws.onmessage = msg => console.log('message ' + msg.data');
    ```
- To close the websocket, run `ws.close()`
- To test http server, run `fetch('localhost:8080')`

_Feel free to ask in issues tab, in case of any doubts!_