const connect = require('./client');


console.log("Connecting....");
connect();

const setupInput = function() {
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
};

setupInput();


//
// stdin.on('data', (key) => {
//   process.stdout.write('.');
// });