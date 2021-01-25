const net = require('net');
const strftime = require('strftime');
const server = net.createServer(function (socket) {
  socket.write(strftime('%F %R', new Date()) + '\n');
  socket.end();
})  
server.listen(process.argv[2]);
