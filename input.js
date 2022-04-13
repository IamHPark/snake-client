let connection;

const setupInput = function(conn) {
  connection = conn;  // save conn in the variable 
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf-8');
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.stdout.write('exit game\n');
    process.exit();
  }
  if (key === 'w') {
    connection.write("Move: up")  
  }
  if (key === 'a') {
    connection.write("Move: left")
  }
  if (key === 's') {
    connection.write("Move: down");
  }
  if (key === 'd') {
    connection.write('Move: right')
  }
  if (key === 'x') {
    connection.write("Say: say something!");
  }
};

module.exports = { setupInput };