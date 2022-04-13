const net = require('net');

// establish a connection with the game server 
const connect = function () {
  const conn = net.createConnection({
    host: '10.0.2.15',
    port: 50541
  });

  conn.setEncoding('utf-8');

  return conn;
};

console.log("Connecting....");
connect();