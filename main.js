var http = require('http');

var port = process.env.port || 8080;

http.createServer(function (req, res) {
    var html = buildHtml(req);
    
    res.writeHead(200, {
        'Content-Type': 'text/html',
        'Content-Length': html.length,
        'Expires': new Date().toUTCString()
    });

    res.end(html);
}).listen(port);

function buildHtml(req) {
    var header = '';
    var body = '<h1>Profesional Portal</h1> <p>Welcome to my profesional portal</>';
    return '<!DOCTYPE html>' + '<html><header>' + header + '</header><body>' + body + '</body></html>';
};