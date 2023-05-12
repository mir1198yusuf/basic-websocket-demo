const http = require('http');
const WebSocketServer = require('websocket').server;

let connection = null;
const httpServer = http.createServer((req, res) => {
    console.log('http request received ${req}');   
});

const websocketServer = new WebSocketServer({
    httpServer: httpServer
});

websocketServer.on('request', (req) => {
    console.log(`Websocket key. This is same as Sec-Websocket-key request header ${req.key}`)
    connection = req.accept(null, req.origin);  // null means accepting all sub-protocol, 

    connection.on('close', (t) => {
        console.log(`closed ${t}`); // not sure what t is
    });
    connection.on('message', (message) => {
        console.log(`message ${message.utf8Data}`);
    });
});

httpServer.listen(8080, () => {
    console.log('http server running at 8080');
});
