var http = require('http');

var requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!\n');
}

var server_port = process.env.PORT || 8080
var server_ip_address = process.env.IP || '127.0.0.1'

var server = http.createServer(requestListener); 

server.listen(server_port, server_ip_address, function () {
  console.log( "Listening on " + server_ip_address + ", on port " + server_port )
});
