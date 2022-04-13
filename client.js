const net = require('net');
// establish a connection with the game server 
// move connect function from play.js to client.js
const connect = function () {
  const conn = net.createConnection({
    host: '10.0.2.15',
    port: 50541
  });

  conn.setEncoding('utf-8');

  return conn;
};

module.exports = {
  connect
};