var http = require("http");
var dt = require('./DateModule');
var url = require('url');
var fs = require('fs');
//var formidable = require('C:/Users/AssAssiN/node_modules/formidable');


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
http.createServer(onReq).listen(80);

// Console will print the message
console.log('Server running at http://127.0.0.1/index.html');