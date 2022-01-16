const express = require('express');
const ws = require('express-ws');
const app = express();

const expressWs = ws(app);

app.use(cors());

app.ws('/echo', function(ws, req) {
    ws.on('OPEN',() => {
        console.log('OPEN');
    });
    ws.on('message', (msg) => {
      ws.send(msg);
    });
    ws.on('ERROR',() => {
        console.log('ERROR');
    });
    ws.on('CLOSE',() => {
        console.log('CLOSE');
    });
  });

 
  