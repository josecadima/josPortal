var http = require ('http');

var routing = function (request, response) {
    response.writeHead(200, {'Content-Type':'text/plain'});

    response.end('Hello world response');
}

var server = http.createServerrouting();

server.listen(8080);

console.log('Hello world App');