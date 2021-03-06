const net = require('net');
const { IP, PORT } = require('./constants');
// establish a connection with the game server 
// move connect function from play.js to client.js


const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.setEncoding('utf-8');

  conn.on('connect', () => {
    conn.write("Successfully connected to game server!")
  })

  conn.on('connect', () => {
    conn.write('Name: SOO');
  });
  
  conn.on('data', (data) => {
    console.log(data);
  })


  //hard-coding : command for moving 
  // conn.on('connect', () => {
  //     setTimeout( () => { conn.write("Move: up"); }, 1000)
  // });
  // conn.on('connect', () => {
  //   let count = 0;
  //   let interval = setInterval( () => {
  //     count ++;
  //     if( count === 10) {
  //       clearInterval(interval);
  //     }
  //     conn.write("Move: up");
  //   }, 500);
  // });

  return conn;
};

module.exports = { connect };