// Creat web server
// 1. Load http module
var http = require('http');

// 2. Create server
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(8080);

// 3. Log message
console.log('Server running at http://webserver:8080/');