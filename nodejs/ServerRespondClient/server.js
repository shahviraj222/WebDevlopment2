var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {

  var q = url.parse(req.url, true); //parse method split the url into various name

  var filename = "." + q.pathname; //pathname give last name

  fs.readFile(`./ServerRespondClient/${filename}.html`, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      res.end("404 Not Found");
      return 
    } 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
     res.end();
     return 
  });
}).listen(8080);