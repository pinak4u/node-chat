const express = require('express');
const http = require('http');
const socketServer = require('socket.io');
const port = 3000;

const app = express();
const server = http.createServer(app);
const io = new socketServer.Server(server);

app.use(express.static('public'));

io.on('connection', (socket) => {
  console.log('A user connected');
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});