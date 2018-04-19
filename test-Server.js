var http = require("http");

function onReq(req,res) {

  res.writeHead(200,{'Content-Type' : 'text/plain'});
  res.write('hello');
  res.end();

}

http.createServer(onReq).listen(8080);

// Console will print the message
console.log('Server running at http://127.0.0.1:8080');
