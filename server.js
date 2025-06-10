var http = require('http');
var dt = require('./module');
var url = require('url')

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  //   res.write("The date and time are currently: " + dt.myDateTime());
//   res.write(req.url)
var txt = q.month + " " + q.year;
  res.end(txt);
}).listen(8080); 