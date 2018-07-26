const server = require('./build/app.cjs.js');

server({
  port: 3030,
  hostname: 'localhost',
  debug: false,
});
