var http = require('http');
var fs = require('fs');        // we need to import the fs file to read file and sync and make changes in the file
http.createServer(function(req,res){
    res.writeHead(200,{'content-Type': 'text/html'});               // this writehead will convert the file in to webpage readable form , it we write the test/plain it will show the whole html content on the webpage
    var html = fs.readFileSync(__dirname + '/index.html','utf-8');        // here if we not write the utf8 then the conversion 
    var message = 'randon message';
    html = html.replace('{message}',message);           
    res.end(html);
}).listen(8000,'127.0.0.1');