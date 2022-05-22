const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server,{
    cors: {
        origin: '*',
    }
});
const cors = require('cors');

app.use(cors())


app.get('/', (req, res) => {
  res.send("OK");
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on("green",(message)=>{
    console.log(message);
  });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});