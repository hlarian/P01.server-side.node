var http = require("http");
var dt = require('./DateModule');
var fs = require('fs');


function onReq(req,res) {

    fs.readFile('index.html', function (err, data) {
        if (err){
            console.log(err.toString());
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data + dt.myDateTime());
        res.end();

    });
}
http.createServer(onReq).listen(8080);

// Console will print the message
console.log('Server running at http://127.0.0.1:8080/index.html');